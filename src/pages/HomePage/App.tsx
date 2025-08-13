import { useState } from 'react'
import { GameArea } from '@/components/GameArea'
import { GameBoard } from '@/components/GameBoard'
import { GameOver } from '@/components/GameOver'
import { Log } from '@/components/Log'
import { Player } from '@/components/Player'
import { deriveActivePlayer } from '@/utils/deriveActivePlayer.ts'
import { deriveGameBoard } from '@/utils/deriveGameBoard.ts'
import { deriveWinner } from '@/utils/deriveWinner.ts'
import type { IGameTurn, TPlayerSymbol } from '@/types/common.ts'
import { INITIAL_PLAYERS } from '@/constants/common.ts'
import styles from './App.module.scss'

export const App = () => {
	const [gameTurns, setGameTurns] = useState<IGameTurn[]>([])
	const [players, setPlayers] = useState<Record<TPlayerSymbol, string>>(INITIAL_PLAYERS)

	const activePlayer = deriveActivePlayer(gameTurns)
	const gameBoard = deriveGameBoard(gameTurns)

	const winner = deriveWinner(gameBoard, players)
	const hasDraw = gameTurns.length === 9 && !winner

	const handleChangeActivePlayer = (rowIndex: number, colIndex: number) => {
		setGameTurns(prevTurns => {
			const currentPlayer = deriveActivePlayer(prevTurns)

			const newTurn = {
				player: currentPlayer,
				square: {
					row: rowIndex,
					col: colIndex
				}
			}

			return [newTurn, ...prevTurns]
		})
	}

	const handlePlayerNameChange = (symbol: TPlayerSymbol, newName: string) => {
		setPlayers(prevPlayers => ({ ...prevPlayers, [symbol]: newName }))
	}

	const handleRestartGame = () => setGameTurns([])

	if (winner || hasDraw) {
		return <GameOver winner={winner} onRestart={handleRestartGame} />
	}

	return (
		<main className={styles.root}>
			<GameArea>
				<div className={styles.gameContainer}>
					<ol className={styles.players}>
						<Player
							initialName={INITIAL_PLAYERS.X}
							symbol='X'
							onChangeName={handlePlayerNameChange}
							isActive={activePlayer === 'X'}
						/>
						<Player
							initialName={INITIAL_PLAYERS.O}
							symbol='O'
							onChangeName={handlePlayerNameChange}
							isActive={activePlayer === 'O'}
						/>
					</ol>
					<GameBoard board={gameBoard} onSelectSquare={handleChangeActivePlayer} />
				</div>
				<Log gameTurns={gameTurns} />
			</GameArea>
		</main>
	)
}
