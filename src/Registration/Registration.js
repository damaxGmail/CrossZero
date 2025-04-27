const RegistrationLayout = ({ page }) => {
	return (
		<>
			<h1>Registration</h1>
		</>
		// <div className={styles.screensaver} onClick={handleScreenClick}>
		// 	{/* Картинка заставки */}
		// 	<img
		// 		src="/GameStart_4.png"
		// 		alt="Game Start"
		// 		className={`${styles.image} ${isPressed ? styles.pressed : ''}`}
		// 	/>

		// 	{/* Контейнер для текста внутри заставки */}
		// 	{showText && (
		// 		<div className={styles.textContainer}>
		// 			<h1 className={styles.TextGame}>ice vs flame</h1>
		// 		</div>
		// 	)}

		// </div>
	);
}

export const Registration = () => {

	return <RegistrationLayout
		page={'page'}

	/>;
}
