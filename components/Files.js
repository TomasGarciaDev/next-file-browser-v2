import styles from '../styles/Files.module.css';

export default function Files({children, data}) {

  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
