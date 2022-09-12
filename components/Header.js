import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
      <h1>File Browser</h1>
      <input type='text' className={styles.inputBox} placeholder="Search" />
    </header>
  )
}
