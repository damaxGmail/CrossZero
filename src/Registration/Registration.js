import React, { useState, useEffect } from 'react';
import styles from './Registration.module.css';
import { playSound } from '../Effect/Effect';

const RegistrationLayout = ({ onStartGame, stopMusic }) => {

	const handleRegister = () => {
		// Здесь можно добавить валидацию данных, если нужно

		stopMusic();
		onStartGame(); // Переход к игре
	};

	return (
		<>
			<div className={styles.registrationContainer}>
				<div className={styles.fildRegistration}>

					<h1>Регистрация</h1>
					<form className={styles.form}>
						{/* Поле Login */}
						<div className={styles.inputGroup}>
							<label>Login:</label>
							<input
								type="text"
								placeholder="Введите Ваш Логин"
								className={styles.input}
							/>
						</div>
						{/* Поле Email */}
						<div className={styles.inputGroup}>
							<label>Email:</label>
							<input
								type="email"
								placeholder="Введите email"
								className={styles.input}
							/>
						</div>

						{/* Поле Пароль */}
						<div className={styles.inputGroup}>
							<label>Пароль:</label>
							<input
								type="password"
								placeholder="Введите пароль"
								className={styles.input}
							/>
						</div>

						{/* Поле Подтверждение пароля */}
						<div className={styles.inputGroup}>
							<label>Подтвердите пароль:</label>
							<input
								type="password"
								placeholder="Подтвердите пароль"
								className={styles.input}
							/>
						</div>

						<button type="submit" className={styles.buttonReg} onClick={handleRegister}>Зарегистрироваться</button>
					</form>
				</div>
			</div>
		</>
	);
};

export const Registration = ({ onStartGame }) => {
	const [audio, setAudio] = useState(null);

	useEffect(() => {

		// -!!!-
		// const currentAudio = playSound(null, 'Registration');
		// setAudio(currentAudio);

		// return () => {
		// 	if (currentAudio) {
		// 		currentAudio.pause();
		// 		currentAudio.currentTime = 0;
		// 	}
		// };


	}, []);

	const stopMusic = () => {
		if (audio) {
			audio.pause(); // Останавливаем воспроизведение
			audio.currentTime = 0; // Сбрасываем позицию звука
		}
	};

	return <RegistrationLayout
		onStartGame={onStartGame}
		stopMusic={stopMusic}
	/>;
}
