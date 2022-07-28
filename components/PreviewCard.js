import React from 'react';
import styles from '../styles/PreviewCard.module.css';
import Image from 'next/image';

export default function PreviewFile({file}) {
  console.log(file)
  return (
    <div className={styles.container}>
      <img src={file.image} height={200} width={200} alt='' className={styles.image} />
      <h5>{file.name.toUpperCase()}</h5>
      <p>Type: {file.type}</p>
      <p>Date Created: {file.date_created}</p>
      <p>Date Modified: {file.date_modified}</p>
    </div>
  )
}
