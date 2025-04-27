import { useState, useRef } from 'react';
import styles from './ScreenSaver.module.css';

const ScreenSaverLayout = ({ isPressed, showText, handleScreenClick, buttonPressAudioRef, audioRef }) => {
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

			{/* Аудио для нажатия кнопки */}
			<audio ref={buttonPressAudioRef} src="/sounds/button_press_enter.mp3" />

			{/* Основная музыка */}
			<audio ref={audioRef} src="/sounds/screensaver.mp3" />
		</div>
	);
}


export const ScreenSaver = () => {
	const [showSaver, setShowSaver] = useState(true);
	const [isPressed, setIsPressed] = useState(false); // Состояние "нажатия"
	const [showText, setShowText] = useState(false); // Показывать текст или нет
	const audioRef = useRef(null);
	const buttonPressAudioRef = useRef(null);

	// Обработчик клика по заставке
	const handleScreenClick = () => {
		// Проигрываем звук нажатия кнопки
		if (buttonPressAudioRef.current) {
			buttonPressAudioRef.current.play().catch((e) =>
				console.error("Не удалось проиграть звук:", e)
			);
		}

		// Изменяем состояние на "нажатие"
		setIsPressed(true);

		// Через короткое время начинаем воспроизведение основной музыки
		setTimeout(() => {
			if (audioRef.current) {
				audioRef.current.play().catch((e) =>
					console.error("Не удалось проиграть музыку:", e)
				);
			}

			// Показываем текст после начала музыки
			setShowText(true);

			// Устанавливаем таймер для исчезновения заставки
			const timer = setTimeout(() => {
				setShowSaver(false);
				if (audioRef.current) {
					audioRef.current.pause();
				}
			}, 12000);

			return () => clearTimeout(timer);
		}, 300); // Задержка для эффекта "проседания"
	};

	// Скрываем заставку, если она больше не нужна
	if (!showSaver) return null;

	return <ScreenSaverLayout
		isPressed={isPressed}
		showText={showText}
		handleScreenClick={handleScreenClick}
		buttonPressAudioRef={buttonPressAudioRef}
		audioRef={audioRef}
	/>

};
