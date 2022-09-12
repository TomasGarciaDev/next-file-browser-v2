import styles from '../styles/FileCard.module.css';
import Image from 'next/image';

export default function FileCard({file, name, image, id, setFile}) {
  const handleClick = (e) => {
    e.preventDefault()
    setFile(file)
    // console.log(file)
  }

  return (
    <div className={styles.container} onClick={handleClick}>
      <Image src={image} width={100} height={100} alt=''></Image>
      <span>{name}</span>
    </div>
  )
}
