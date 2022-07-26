import styles from '../styles/FileCard.module.css';

export default function FileCard({name}) {
  

  return (
    <div className={styles.container}>{name}</div>
  )
}
