export type TPlayerSymbol = 'X' | 'O'

export type TBoardSquare = TPlayerSymbol | null

export interface IGameTurn {
	player: TPlayerSymbol
	square: {
		row: number
		col: number
	}
}
