import { ScreenSaver } from './ScreenSaver/ScreenSaver'
import { Reset } from './Reset/Reset'
import { Field } from './Field/Field'
import { Information } from './Information/Information'
import { Effect } from './Effect/Effect'
import styles from './app.module.css';
import { useState, useEffect } from 'react';

const GameLayout = ({ field, isDraw, isGameEnded, currentPlayer, handleCellClick, onReset, ExitGame,
	knightEffectActive,
	dragonEffectActive }) => {

	return (
		<>
			<div className={styles.gameZona}>
				{/* <ScreenSaver /> */}
				<Field field={field} onCellClick={handleCellClick} knightEffectActive={knightEffectActive}
					dragonEffectActive={dragonEffectActive} />

				<Information isDraw={isDraw}
					isGameEnded={isGameEnded}
					currentPlayer={currentPlayer}
				/>
				<Reset onReset={onReset} ExitGame={ExitGame} />
			</div >
		</>

	);
}

export const Game = () => {

	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);//ничья
	const [field, setField] = useState(Array(9).fill(''));

	const [knightEffectActive, setKnightEffectActive] = useState(false);
	const [dragonEffectActive, setDragonEffectActive] = useState(false);

	//Изменение курсора
	useEffect(() => {
		if (currentPlayer === 'X') {
			document.body.style.cursor = "url('/kursors/Arm_knight_64.ico'), auto"; // Курсор для рыцаря (крестик)
		} else {
			document.body.style.cursor = "url('/kursors/Arm_Dracon_64.ico'), auto"; // Курсор для дракона (нолик)
		}
	}, [currentPlayer]);


	// Обработчик клика по клетке
	const handleCellClick = (index) => {

		if (field[index] || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		if (currentPlayer === 'X') {
			setKnightEffectActive(true); // Включаем эффект для рыцаря
		} else {
			setDragonEffectActive(true); // Включаем эффект для дракона
		}

		if (!checkWin(newField)) {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}

		//  эффект длиться только пол секунды
		setTimeout(() => {
			setKnightEffectActive(false);
			setDragonEffectActive(false);
		}, 500);

	};

	//проверка результата игры
	const checkWin = (newField) => {

		const WIN_PATTERNS = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
		];

		for (const variantWin of WIN_PATTERNS) {
			const first = variantWin[0];
			const second = variantWin[1];
			const three = variantWin[2];

			if (newField[first] === '' || newField[second] === '' || newField[three] === '') {

				continue;
			}
			else if (newField[first] === newField[second] && newField[first] === newField[three]) {
				setIsGameEnded(true);

				return true;
			}

			//проверка на ничью , если не нашли победу
			if (!newField.includes('')) {
				setIsGameEnded(true);
				setIsDraw(true);
				return false;
			}

		}

		return false;
	};

	// Обработчик кнопки "Начать заново"
	const handleReset = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};
	const handleExitGame = () => {
		alert('По данной кнопке будет выходить новое окно со списком победителей (из БД). В рамках следующего ДЗ');
	}


	return <GameLayout
		field={field}
		isDraw={isDraw}
		isGameEnded={isGameEnded}
		currentPlayer={currentPlayer}
		handleCellClick={handleCellClick}
		onReset={handleReset}
		ExitGame={handleExitGame}
		knightEffectActive={knightEffectActive}
		dragonEffectActive={dragonEffectActive}
	/>;


};


