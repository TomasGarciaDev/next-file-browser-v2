import styles from '../styles/SidebarItem.module.css';
import React, { useState} from 'react';

export default function SidebarItem({ icon, title, setFiles}) {
  const [data, setData] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    getData()

    // console.log(data)
  }

  const getData = () => {
    fetch(`http://localhost:3000/api/${title.toLowerCase()}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setFiles(data)
        })
  }

  return (
    <div className={styles.container} id={title.toLowerCase()} onClick={handleClick}>
      <h4>{ icon } { title }</h4>
    </div>
  )
}
