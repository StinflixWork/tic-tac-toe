import type { IGameTurn, TPlayerSymbol } from '@/types/common.ts'

export const deriveActivePlayer = (gameTurns: IGameTurn[]): TPlayerSymbol => {
	let currentPlayer: TPlayerSymbol = 'X'

	if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
		currentPlayer = 'O'
	}

	return currentPlayer
}
