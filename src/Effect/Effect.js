import { useEffect, useState } from 'react';

export const Effect = ({ typeEffect, isActive }) => {
	//alert(typeEffect, isActive);
	// const [currentImage, setCurrentImage] = useState(imageSrc);

	// useEffect(() => {
	// 	if (isActive) {
	// 		// Воспроизводим звук
	// 		const audio = new Audio(soundSrc);
	// 		audio.play();

	// 		// Подменяем картинку на 1 секунду
	// 		setCurrentImage('/sprites/animated_image.png'); // Замените на путь к анимированной картинке
	// 		const timer = setTimeout(() => {
	// 			setCurrentImage(imageSrc); // Возвращаем исходную картинку
	// 		}, 1000);

	// 		return () => clearTimeout(timer); // Очищаем таймер при размонтировании
	// 	}
	// }, [isActive, imageSrc, soundSrc]);

	// return <img src={currentImage} alt="Effect" className="effect-image" />;
};
