import styles from './Reset.module.css';
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
</link>

const ResetLayout = () => {
	return (
		<button className={styles.button}> Начать заново </button>
	);
}

export const Reset = () => {


	return <ResetLayout />
}
