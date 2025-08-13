import type { TBoardSquare } from '@/types/common.ts'

export const INITIAL_PLAYERS = {
	X: 'Player 1',
	O: 'Player 2'
}

export const INITIAL_GAME_BOARD: TBoardSquare[][] = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
]
