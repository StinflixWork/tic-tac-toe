import styles from './GameOver.module.scss'

interface GameOverProps {
	winner: string | undefined
	onRestart: () => void
}

export const GameOver = ({ winner, onRestart }: GameOverProps) => {
	let resultGame = <h3>It's a draw!</h3>

	if (winner) {
		resultGame = (
			<div className={styles.player}>
				<h3>You won!</h3>
				<h2>{winner}</h2>
			</div>
		)
	}

	return (
		<div className={styles.root}>
			<div className={styles.content}>
				{resultGame}
				<button onClick={onRestart}>Restart the game</button>
			</div>
		</div>
	)
}
