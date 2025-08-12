import type { IGameTurn } from '@/types/common.ts'
import styles from './Log.module.scss'

interface LogProps {
	gameTurns: IGameTurn[]
}

export const Log = ({ gameTurns }: LogProps) => {
	return (
		<div className={styles.root}>
			<h3 className={styles.title}>Logs</h3>
			<ol className={styles.turns}>
				{gameTurns.map(turn => (
					<li key={`${turn.square.row}${turn.square.col}`}>
						{turn.player}: {`[${turn.square.row},${turn.square.col}]`}
					</li>
				))}
			</ol>
		</div>
	)
}
