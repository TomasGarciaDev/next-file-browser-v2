import styles from '../styles/Preview.module.css'

export default function Preview({children}) {
  return (
    <div className={styles.container}>{children}</div>
  )
}
