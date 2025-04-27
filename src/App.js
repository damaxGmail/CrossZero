import React, { useState, useEffect } from 'react';
import { ScreenSaver } from './ScreenSaver/ScreenSaver';
import { Registration } from './Registration/Registration';
import { Game } from './Game/Game';


const AppLayout = ({
	page,
	goToRegistration,
	goToGame
}) => {

	return (
		<>
			<div>
				{page === 'screensaver' && <ScreenSaver onStart={goToRegistration} />}
				{page === 'registration' && <Registration onStartGame={goToGame} />}
				{page === 'game' && <Game />}
			</div>
		</>
	);
}

export const App = () => {
	const [page, setPage] = useState('screensaver'); // Текущая страница

	// Функция для перехода на страницу регистрации
	const goToRegistration = () => {
		setPage('registration');
	};

	// Функция для перехода на страницу игры
	const goToGame = () => {

		setPage('game');
		// console.log("New " + page); //здесь выходит "New registration"
	};

	// Эффект для отслеживания изменений состояния `page`
	useEffect(() => {
		console.log("Current page:", page);
		if (page === 'game') {
			console.log("Перешли на страницу игры!");
			// Здесь можно добавить дополнительную логику, если нужно
		}
	}, [page]); // Этот эффект срабатывает при каждом изменении `page`



	return <AppLayout
		page={page}
		goToRegistration={goToRegistration}
		goToGame={goToGame}
	/>;

};
