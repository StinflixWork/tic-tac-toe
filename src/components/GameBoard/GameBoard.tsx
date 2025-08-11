import { clsx } from 'clsx'
import styles from './GameBoard.module.scss'

export const GameBoard = () => {
	return (
		<div className={styles.root}>
			<div className={styles.square}>x</div>
			<div className={styles.square}>o</div>
			<div className={clsx(styles.square, styles.highlighted)}>x</div>
			<div className={styles.square}>o</div>
			<div className={styles.square}>o</div>
			<div className={clsx(styles.square, styles.highlighted)}>x</div>
			<div className={styles.square}>o</div>
			<div className={styles.square}>x</div>
			<div className={clsx(styles.square, styles.highlighted)}>x</div>
		</div>
	)
}
