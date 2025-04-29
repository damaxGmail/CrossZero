import React, { useState } from 'react';
import { ScreenSaver } from './ScreenSaver/ScreenSaver';
import { Registration } from './Registration/Registration';
import { Game } from './Game/Game';


const AppLayout = ({
	page,
	goToRegistration,
	goToGame,

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
	//const [page, setPage] = useState('screensaver'); // Текущая страница
	const [page, setPage] = useState('registration'); // временно

	// Функция для перехода на страницу регистрации
	const goToRegistration = () => {
		setPage('registration');
	};

	// Функция для перехода на страницу игры
	const goToGame = () => {
		setPage('game');
	};

	return <AppLayout
		page={page}
		goToRegistration={goToRegistration}
		goToGame={goToGame}
	/>;

};
