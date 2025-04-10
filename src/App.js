import { ScreenSaver } from './ScreenSaver/ScreenSaver'
import { Reset } from './Reset/Reset'
import { Field } from './Field/Field'
import { Information } from './Information/Information'
import styles from './app.module.css';
import { useState } from 'react';

const GameLayout = ({ field, isDraw, isGameEnded ,currentPlayer }) => {

	return (
		<>
			<div className={styles.gameZona}>
				{/* <ScreenSaver /> */}
				<Field field={field} />
				<Information isDraw={isDraw}
					isGameEnded={isGameEnded}
					currentPlayer={currentPlayer}
				/>
				<Reset />
			</div >
		</>

	);
}


export const Game = () => {

	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	return <GameLayout
		field={field}
		isDraw={isDraw}
		isGameEnded={isGameEnded}
		currentPlayer={currentPlayer}
		 />;

};

