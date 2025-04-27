import styles from './Field.module.css'

const FieldLayout = ({ field, onCellClick }) => {

	return (
		<>

			<div className={styles.field}>

				{field.map((cell, index) => {

					const cellClass =
						cell === 'X'
							? styles.cell_Cross
							: cell === '0'
								? styles.cell_Zero
								: styles.cell;

					return (
						<button
							key={index}
							className={cellClass}
							onClick={() => onCellClick(index)}
						>
						</button>
					);
				})}

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

export const Field = ({ field, onCellClick }) => {

	return <FieldLayout field={field} onCellClick={onCellClick} />
}
