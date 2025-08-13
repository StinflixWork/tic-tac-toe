import type { TBoardSquare, TPlayerSymbol } from '@/types/common.ts'
import { WINNING_COMBINATIONS } from '@/constants/winningCombinations.ts'

type DetermineWinnerFn = (
	gameBoard: TBoardSquare[][],
	players: Record<TPlayerSymbol, string>
) => string | undefined

export const deriveWinner: DetermineWinnerFn = (gameBoard, players) => {
	let winner: string | undefined

	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
		const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = players[firstSquareSymbol]
		}
	}

	return winner
}
