import styles from './Field.module.css'

const FieldLayout = ({ field }) => {
	return (
		<>

			<div className={styles.field}>

				{field.map((cell, index) => (
					<button key={index} className={styles.cell}>
						{cell}
					</button>
				))}

			</div>
			<img
				src="/sprites/Knight1.png"
				alt="Рыцарь"
				className={styles.knight}
			/>
			<img
				src="/sprites/dragon.png"
				alt="Дракон"
				className={styles.dragon}
			/>
		</>
	);
}

export const Field = ({ field }) => {

	return <FieldLayout field={field} />
}
