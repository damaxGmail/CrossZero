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
					{/* {error && <p className={styles.error}>{error}</p>}
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.inputGroup}>
						<label>Email:</label>
						<input
							type="email"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Введите email"
						/>
					</div>
					<div className={styles.inputGroup}>
						<label>Пароль:</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Введите пароль"
						/>
					</div>
					<div className={styles.inputGroup}>
						<label>Подтвердите пароль:</label>
						<input
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							placeholder="Подтвердите пароль"
						/>
					</div>
					<button type="submit"  >Зарегистрироваться</button>
				</form> */}
					<button type="submit" className={styles.buttonReg} onClick={handleRegister}>Зарегистрироваться</button>
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
