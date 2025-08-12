import { useState } from 'react'
import { GameArea } from '@/components/GameArea'
import { GameBoard } from '@/components/GameBoard'
import { GameOver } from '@/components/GameOver'
import { Log } from '@/components/Log'
import { Player } from '@/components/Player'
import { deriveActivePlayer } from '@/utils/deriveActivePlayer.ts'
import type { IGameTurn } from '@/types/common.ts'
import { initialGameBoard } from '@/constants/initialGameBoard.ts'
import { WINNING_COMBINATIONS } from '@/constants/winningCombinations.ts'
import styles from './App.module.scss'

export const App = () => {
	const [gameTurns, setGameTurns] = useState<IGameTurn[]>([])

	const activePlayer = deriveActivePlayer(gameTurns)
	const gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])]
	let winner
	const hasDraw = gameTurns.length === 9 && !winner

	for (const turn of gameTurns) {
		const { player, square } = turn
		const { row, col } = square

		gameBoard[row][col] = player
	}

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
		const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = firstSquareSymbol
		}
	}

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

	const handleRestartGame = () => setGameTurns([])

	if (winner || hasDraw) {
		return <GameOver winner={winner} onRestart={handleRestartGame} />
	}

	return (
		<main className={styles.root}>
			<GameArea>
				<div className={styles.gameContainer}>
					<ol className={styles.players}>
						<Player initialName='Player 1' symbol='x' isActive={activePlayer === 'x'} />
						<Player initialName='Player 2' symbol='o' isActive={activePlayer === 'o'} />
					</ol>
					<GameBoard board={gameBoard} onSelectSquare={handleChangeActivePlayer} />
				</div>
				<Log gameTurns={gameTurns} />
			</GameArea>
		</main>
	)
}
