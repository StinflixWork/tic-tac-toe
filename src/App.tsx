import { GameArea } from '@/components/GameArea'
import { GameBoard } from '@/components/GameBoard'
import { Player } from '@/components/Player'
import styles from './App.module.scss'

export const App = () => {
	return (
		<section className={styles.root}>
			<GameArea>
				<div className={styles.gameContainer}>
					<ol className={styles.players}>
						<Player initialPlayerName='Player 1' playerSymbol='x' isActivePlayer />
						<Player initialPlayerName='Player 2' playerSymbol='o' isActivePlayer />
					</ol>
					<GameBoard />
				</div>
			</GameArea>
		</section>
	)
}
