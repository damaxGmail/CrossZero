import React, { useState } from 'react';
import styles from './Registration.module.css';

const RegistrationLayout = ({ onStartGame }) => {

	// Если валидация успешна, переходим на страницу игры
	//onStartGame();

	return (
		<>
			<div className={styles.registrationContainer}>
				{/*<h1>Регистрация</h1>
				 {error && <p className={styles.error}>{error}</p>}
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
				</form>*/}
				<button type="submit" className={styles.buttonReg} onClick={onStartGame}>Зарегистрироваться</button>
			</div>
		</>
	);

};

export const Registration = ({ onStartGame }) => {

	return <RegistrationLayout
		onStartGame={onStartGame}
	/>;
}
