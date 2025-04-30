import React, { useState, useEffect } from 'react';
import styles from './Registration.module.css';
import { playSound } from '../Effect/Effect';

const sendFormData = (formData) => {

	console.log(formData);
};


const RegistrationLayout = ({ onStartGame, stopMusic }) => {
	const [login, setLogin] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [doublePassword, setDoublePassword] = useState('');

	const [loginError, setLoginError] = useState(null);

	const onLoginChange = ({ target }) => {
		setLogin(target.value);

		let newError = null;

		if (!/^[\w_]*$/.test(target.value)) {
			newError = 'Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание';
		} else if (target.value.length > 20) {
			newError = 'Неверный логин. Должно быть не больше 20 символов';
		}

		setLoginError(newError);
	};

	const validateDoublePassword = (password, doublePassword) => {

		if (password !== doublePassword) {
			return 'Введенные пароли не совпадают';
		}

		return null;
	}
	const onDoublePasswordChange = ({ target }) => {
		const newDoublePassword = target.value;
		setDoublePassword(newDoublePassword);

		const errors = validateDoublePassword(password, newDoublePassword);

		setLoginError(errors);

	};

	const validatePassword = (password, login) => {
		const errors = [];

		if (password.length < 4 || password.length > 64) {
			errors.push('Пароль должен быть длиной от 4 до 64 символов.');
		}

		if (/\s/.test(password)) {
			errors.push('Пароль не должен содержать пробелы.');
		}

		if (!password || !login) return ['Некорректные данные для валидации.'];
		if (
			password.toLowerCase().includes(login.toLowerCase())
		) {
			errors.push('Пароль не должен быть похож на логин .');
		}

		return errors;
	};

	const onPasswordChange = ({ target }) => {
		const newPassword = target.value;
		setPassword(newPassword);


		// Выполняем валидацию пароля
		const errors = validatePassword(newPassword, login);
		if (errors.length > 0) {
			setLoginError(errors[0]);
		} else {
			setLoginError(null);
		}
	};

	const onLoginBlur = ({ target }) => {
		if (target.value.length < 3) {
			setLoginError('Неверный логин. Должно быть не меньше 3 символов');
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData({ login, email, password });
	};


	const handleRegister = () => {
		sendFormData({ login, email, password });

		stopMusic();
		onStartGame(); // Переход к игре
	};

	const onEmailChange = ({ target }) => {
		setEmail(target.value);
		let newError = null;

		if (!target.value.includes('@')) {
			newError = 'Неверный email. Должен содержать символ "@"';
		}
		else if (target.value.length < 5) {
			newError = 'Неверный email. Слишком короткий адрес';
		}

		setLoginError(newError);
	}


	return (
		<>
			<div className={styles.registrationContainer}>
				<div className={styles.fildRegistration}>

					<h1> 1) Регистрация  простой проверкой</h1>
					<form className={styles.form} onSubmit={onSubmit}>
						{/* Поле Login */}
						<div className={styles.inputGroup}>
							{!loginError && <label>Login:</label>}
							{loginError && <div className={styles.error}>{loginError}</div>}

							<input
								name="login"
								type="text"
								value={login}
								placeholder="Введите Ваш Логин"
								className={styles.input}
								onChange={onLoginChange}
								onBlur={onLoginBlur}
							/>
						</div>
						{/* Поле Email */}
						<div className={styles.inputGroup}>
							{!loginError && <label>Email:</label>}
							{loginError && <div className={styles.error}>{loginError}</div>}
							<input
								type="email"
								value={email}
								placeholder="Введите email"
								className={styles.input}
								onChange={onEmailChange}
							/>
						</div>

						{/* Поле Пароль */}
						<div className={styles.inputGroup}>
							{!loginError && <label>Пароль:</label>}
							{loginError && <div className={styles.error}>{loginError}</div>}
							<input
								type="password"
								value={password}
								placeholder="Введите пароль"
								className={styles.input}
								onChange={onPasswordChange}
							/>
						</div>

						{/* Поле Подтверждение пароля */}
						<div className={styles.inputGroup}>
							{!loginError && <label>Подтвердите пароль:</label>}
							{loginError && <div className={styles.error}>{loginError}</div>}
							<input
								type="password"
								value={doublePassword}
								placeholder="Подтвердите пароль"
								className={styles.input}
								onChange={onDoublePasswordChange}
							/>
						</div>

						<button type="submit" disabled={!!loginError} className={styles.buttonReg} onClick={handleRegister}>Зарегистрироваться</button>
					</form>
				</div>
			</div>
		</>
	);
};

export const Registration = ({ onStartGame }) => {
	const [audio, setAudio] = useState(null);



	useEffect(() => {

		const currentAudio = playSound(null, 'Registration');
		setAudio(currentAudio);

		return () => {
			if (currentAudio) {
				currentAudio.pause();
				currentAudio.currentTime = 0;
			}
		};


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
