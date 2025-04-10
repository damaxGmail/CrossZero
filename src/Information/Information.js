import style from './Information.module.css'

const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<>
			{isGameEnded ? (
				isDraw ? (
					<h2 className={style.textGame} > Ничья!</h2>
				) : (
					<h2 className={style.textGame}> Победил: {currentPlayer}</h2>
				)
			) : (
				<h2 className={style.textGame} > Ходит: {currentPlayer}</h2>
			)}
		</>
	);
}

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {

	return <InformationLayout
		isDraw={isDraw}
		isGameEnded={isGameEnded}
		currentPlayer={currentPlayer}
	/>
}
