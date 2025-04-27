import { useState, useEffect } from 'react';
import styles from './ScreenSaver.module.css';
import { playSound } from '../Effect/Effect';

const ScreenSaverLayout = ({ isPressed, showText, handleScreenClick }) => {
	return (
		<div className={styles.screensaver} onClick={handleScreenClick}>
			{/* Картинка заставки */}
			<img
				src="/GameStart_4.png"
				alt="Game Start"
				className={`${styles.image} ${isPressed ? styles.pressed : ''}`}
			/>

			{/* Контейнер для текста внутри заставки */}
			{showText && (
				<div className={styles.textContainer}>
					<h1 className={styles.TextGame}>ice vs flame</h1>
				</div>
			)}

		</div>
	);
}


export const ScreenSaver = () => {
	const [showSaver, setShowSaver] = useState(true);
	const [isPressed, setIsPressed] = useState(false); // Состояние "нажатия"
	const [showText, setShowText] = useState(true); // Показывать текст или нет

	useEffect(() => {
		if (showSaver) {
			playSound(null, 'ScreenSaver'); // Проигрываем музыку заставки
		}
	}, [showSaver]);


	// Обработчик клика по заставке
	const handleScreenClick = () => {
		// Изменяем состояние на "нажатие"
		setIsPressed(true);

		// Через короткую задержку закрываем заставку
		setTimeout(() => {
			setShowSaver(false);

			// Открываем новое окно для регистрации
			openRegistrationWindow();
		}, 500); // Задержка для эффекта "проседания"
	};

	// Функция для открытия нового окна регистрации
	const openRegistrationWindow = () => {
		alert('Здесь будет открываться окно регистрации');
	};

	// Если заставка скрыта, не рендерим её
	if (!showSaver) return null;

	return (
		<ScreenSaverLayout
			isPressed={isPressed}
			showText={showText}
			handleScreenClick={handleScreenClick}
		/>
	)
};
