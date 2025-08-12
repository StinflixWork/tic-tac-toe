import type { TBoardSquare } from '@/types/common.ts'
import styles from './GameBoard.module.scss'

interface GameBoardProps {
	board: TBoardSquare[][]
	onSelectSquare: (rowIndex: number, colIndex: number) => void
}

export const GameBoard = ({ board, onSelectSquare }: GameBoardProps) => {
	return (
		<ol className={styles.root}>
			{board.map((row, rowIndex) => (
				<ol key={rowIndex} className={styles.row}>
					{row.map((playerSymbol, colIndex) => (
						<li key={colIndex} className={styles.col}>
							<button
								className={styles.cellBtn}
								onClick={() => onSelectSquare(rowIndex, colIndex)}
								disabled={playerSymbol !== null}
							>
								{playerSymbol}
							</button>
						</li>
					))}
				</ol>
			))}
		</ol>
	)
}
