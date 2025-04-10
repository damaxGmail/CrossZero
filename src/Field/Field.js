import styles from './Field.module.css'

const FieldLayout = () => {
	return (
		<>

			<div className={styles.field}>
				<button className={styles.cell}></button>
				<button className={styles.cell}></button>
				<button className={styles.cell}></button>
				<button className={styles.cell}></button>
				<button className={styles.cell}></button>
				<button className={styles.cell}></button>
				<button className={styles.cell}></button>
				<button className={styles.cell}></button>
				<button className={styles.cell}></button>
			</div>
			<img
				src="/sprites/Knight1.jpg"
				alt="Рыцарь"
				className={styles.knight}
			/>
			<img
				src="/sprites/dragon-not_Fire.png"
				alt="Дракон"
				className={styles.dragon}
			/>
		</>
	);
}

export const Field = () => {

	return <FieldLayout />
}
