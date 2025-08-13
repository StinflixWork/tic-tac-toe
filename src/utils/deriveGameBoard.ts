import type { IGameTurn, TBoardSquare } from '@/types/common.ts'
import { INITIAL_GAME_BOARD } from '@/constants/common.ts'

export const deriveGameBoard = (gameTurns: IGameTurn[]): TBoardSquare[][] => {
	const gameBoard = [...INITIAL_GAME_BOARD.map(innerArray => [...innerArray])]

	for (const turn of gameTurns) {
		const { player, square } = turn
		const { row, col } = square

		gameBoard[row][col] = player
	}

	return gameBoard
}
