import type { PropsWithChildren } from 'react'
import styles from './GameArea.module.scss'

export const GameArea = ({ children }: PropsWithChildren) => {
	return <section className={styles.root}>{children}</section>
}
