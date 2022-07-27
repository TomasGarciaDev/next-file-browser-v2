import styles from '../styles/FileCard.module.css';
import Image from 'next/image';

export default function FileCard({name, image}) {
  console.log(image)

  return (
    <div className={styles.container}>
      <Image src={image} width={60} height={80} alt=''></Image>
      <span>{name}</span>
    </div>
  )
}
