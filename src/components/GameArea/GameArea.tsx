import type { PropsWithChildren } from 'react'
import styles from './GameArea.module.scss'

export const GameArea = ({ children }: PropsWithChildren) => {
	return <div className={styles.root}>{children}</div>
}
