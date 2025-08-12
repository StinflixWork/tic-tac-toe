import type { TPlayerSymbol } from '@/types/common.ts'
import styles from './GameOver.module.scss'

interface GameOverProps {
	winner: TPlayerSymbol | undefined
	onRestart: () => void
}

export const GameOver = ({ winner, onRestart }: GameOverProps) => {
	let resultGame = <h3>It's a draw!</h3>

	if (winner) {
		resultGame = (
			<h3>
				You won, <span>{winner}</span>!
			</h3>
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
