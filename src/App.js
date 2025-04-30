import React, { useState } from 'react';
import { ScreenSaver } from './ScreenSaver/ScreenSaver';
import { Registration } from './Registration/Registration';
import { Registration2 } from './Registration2/Registration2';
import { Game } from './Game/Game';


const AppLayout = ({
	page,
	goToRegistration,
	goToRegistration2,
	goToGame,

}) => {


	return (
		<>
			<div>
				{page === 'screensaver' && <ScreenSaver onStart={goToRegistration} />}
				{page === 'registration' && <Registration onStartGame={goToRegistration2} />}
				{page === 'registration2' && <Registration2 onStartGame={goToGame} />}
				{page === 'game' && <Game />}
			</div>
		</>
	);
}

export const App = () => {
	//const [page, setPage] = useState('screensaver'); // Текущая страница
	const [page, setPage] = useState('registration2'); // временно

	// Функция для перехода на страницу регистрации
	const goToRegistration = () => {
		setPage('registration');
	};

	const goToRegistration2 = () => {
		setPage('registration2');
	};
	// Функция для перехода на страницу игры
	const goToGame = () => {
		setPage('game');
	};

	return <AppLayout
		page={page}
		goToRegistration={goToRegistration}
		goToRegistration2={goToRegistration2}
		goToGame={goToGame}
	/>;

};
