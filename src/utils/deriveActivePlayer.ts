import type { IGameTurn, TPlayerSymbol } from '@/types/common.ts'

export const deriveActivePlayer = (gameTurns: IGameTurn[]): TPlayerSymbol => {
	let currentPlayer: TPlayerSymbol = 'x'

	if (gameTurns.length > 0 && gameTurns[0].player === 'x') {
		currentPlayer = 'o'
	}

	return currentPlayer
}
