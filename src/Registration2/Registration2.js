import React, { useState, useEffect } from 'react';
import styles from './Registration2.module.css';

import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { playSound } from '../Effect/Effect';


// Yup схема валидации
const fieldsSchema = yup.object().shape({
	login: yup
		.string()
		.matches(/^[\w_]*$/, 'Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание')
		.min(3, 'Неверный логин. Должно быть не меньше 3 символов')
		.max(20, 'Неверный логин. Должно быть не больше 20 символов')
		.required('Логин обязателен для заполнения'),
	email: yup
		.string()
		.email('Неверный email. Проверьте формат.')
		.required('Email обязателен для заполнения'),
	password: yup
		.string()
		.min(4, 'Пароль должен быть длиной от 4 до 64 символов')
		.max(8, 'Пароль должен быть длиной от 4 до 8 символов')
		.required('Пароль обязателен для заполнения'),
	doublePassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Введенные пароли не совпадают')
		.required('Подтверждение пароля обязательно'),
});


const RegistrationLayout = ({ onStartGame, stopMusic }) => {

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			email: '',
			password: '',
			doublePassword: '',
		},
		resolver: yupResolver(fieldsSchema),
		mode: 'onBlur', // Валидация при потере фокуса
	});

	const handleRegister = (data) => {
		console.log(data);

		stopMusic();
		onStartGame(); // Переход к игре
	};




	return (
		<>
			<div className={styles.registrationContainer}>
				<div className={styles.fildRegistration}>

					<h1> 2) React Hook Form с Yup</h1>
					<form className={styles.form} onSubmit={handleSubmit(handleRegister)}>
						{/* Поле Login */}
						<div className={styles.inputGroup}>

							<label>Login:</label>
							{errors.login && <div className={styles.error}>{errors.login.message}</div>}

							<input
								name="login"
								type="text"
								placeholder="Введите Ваш Логин"
								className={styles.input}
								{...register('login')}
							/>
						</div>
						{/* Поле Email */}
						<div className={styles.inputGroup}>
							{errors.email && <div className={styles.error}>{errors.email.message}</div>}
							<label>Email:</label>
							<input
								name="email"
								type="email"
								placeholder="Введите email"
								className={styles.input}
								{...register('email')}
							/>
						</div>

						{/* Поле Пароль */}
						<div className={styles.inputGroup}>
							{errors.email && <div className={styles.error}>{errors.email.message}</div>}

							<label>Пароль:</label>
							<input
								name="password"
								type="password"
								placeholder="Введите пароль"
								className={styles.input}
								{...register('password')}
							/>
						</div>

						{/* Поле Подтверждение пароля */}
						<div className={styles.inputGroup}>
							<input
								name="doublePassword"
								type="password"
								placeholder="Подтвердите пароль"
								className={styles.input}
								{...register('doublePassword')}
							/>
						</div>

						<button type="submit" disabled={!!Object.keys(errors).length} className={styles.buttonReg} >Зарегистрироваться</button>
					</form>
				</div>
			</div>
		</>
	);
};

export const Registration2 = ({ onStartGame }) => {
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
