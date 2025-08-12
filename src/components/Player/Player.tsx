import { type ChangeEvent, useState } from 'react'
import { clsx } from 'clsx'
import { Pencil, Save } from 'lucide-react'
import styles from './Player.module.scss'

interface PlayerProps {
	initialPlayerName: string
	playerSymbol: 'x' | 'o'
	isActivePlayer: boolean
}

export const Player = (props: PlayerProps) => {
	const { initialPlayerName, playerSymbol, isActivePlayer = false } = props

	const [isEdit, setIsEdit] = useState(false)
	const [playerName, setPlayerName] = useState(initialPlayerName)

	const handleChangePlayerName = (event: ChangeEvent<HTMLInputElement>) => {
		const newPlayerName = event.target.value
		setPlayerName(newPlayerName)
	}

	const handleToggleEdit = () => setIsEdit(wasEdit => !wasEdit)

	let playerInfo = <span>{playerName}</span>

	if (isEdit) {
		playerInfo = (
			<input
				type='text'
				className={styles.editField}
				value={playerName}
				onChange={handleChangePlayerName}
				maxLength={10}
				autoFocus
			/>
		)
	}

	return (
		<li className={styles.root}>
			<span className={styles.playerSymbol}>{playerSymbol}</span>
			<span className={clsx(styles.playerName, { [styles.active]: isActivePlayer })}>
				{playerInfo}
				<button className={styles.editBtn} onClick={handleToggleEdit}>
					{isEdit ? <Save /> : <Pencil />}
				</button>
			</span>
		</li>
	)
}
