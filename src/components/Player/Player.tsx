import { type ChangeEvent, useState } from 'react'
import { clsx } from 'clsx'
import { Pencil, Save } from 'lucide-react'
import styles from './Player.module.scss'

interface PlayerProps {
	initialPlayerName: string
	playerSymbol: 'x' | 'o'
	isActivePlayer?: boolean
}

export const Player = (props: PlayerProps) => {
	const { initialPlayerName, playerSymbol, isActivePlayer = false } = props

	const [isEdit, setIsEdit] = useState(false)
	const [playerName, setPlayerName] = useState(initialPlayerName)
	const playerInfo = `${playerName} - ${playerSymbol}`

	const handleChangePlayerName = (event: ChangeEvent<HTMLInputElement>) => {
		const newPlayerName = event.target.value

		setPlayerName(newPlayerName)
	}

	const handleToggleEdit = () => setIsEdit(wasEdit => !wasEdit)

	return (
		<div className={styles.root}>
			{!isEdit && (
				<div className={clsx(styles.player, { [styles.active]: isActivePlayer })}>{playerInfo}</div>
			)}
			{isEdit && (
				<input
					type='text'
					className={styles.editField}
					value={playerName}
					onChange={handleChangePlayerName}
					required
				/>
			)}
			<button className={styles.editBtn} onClick={handleToggleEdit}>
				{isEdit ? <Save /> : <Pencil />}
			</button>
		</div>
	)
}
