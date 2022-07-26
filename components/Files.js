import styles from '../styles/Files.module.css';
import FileCard from './FileCard';

export default function Files({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
