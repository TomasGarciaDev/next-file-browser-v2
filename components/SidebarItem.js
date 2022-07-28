import styles from '../styles/SidebarItem.module.css';
import React, { useState} from 'react';
import { API_URL } from "../config/index";

export default function SidebarItem({ icon, title, setFiles}) {
  const [data, setData] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    getData()

    // console.log(data)
  }

  const getData = () => {
    fetch(`${API_URL}/api/${title.toLowerCase()}`)
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
