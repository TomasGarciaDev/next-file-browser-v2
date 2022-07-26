import styles from '../styles/SidebarItem.module.css';
import React, { useState, useEffect } from 'react';

export default function SidebarItem({ icon, title}) {
  const [data, setData] = useState([])

  const handleSubmit = (e) => {
    getData()

    console.log(data)
  }

  const getData = () => {
    fetch(`http://localhost:3000/api/${title.toLowerCase()}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
        })
  }

  return (
    <div className={styles.container}id={title.toLowerCase()} onClick={handleSubmit}>
      <h4>{ icon } { title }</h4>
    </div>
  )
}
