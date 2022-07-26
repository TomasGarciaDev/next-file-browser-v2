import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Preview from "./Preview";
import Files from "./Files";
import FileCard from "./FileCard";
import SidebarItem from "./SidebarItem";
import { IoDocumentSharp } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdOutlineLocalMovies } from "react-icons/md";
import { useState } from "react";

export default function Layout({title}) {
  const [files, setFiles] = useState([])

  console.log(files[1].name)
  return (
    <div className={styles.main_container}>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <div className={styles.container}>
        <Sidebar>
          <SidebarItem title="Documents" icon={<IoDocumentSharp />} setFiles={setFiles} />
          <SidebarItem title="Pictures" icon={<AiOutlinePicture />}/>
          <SidebarItem title="Music" icon={<BsMusicNoteBeamed />}/>
          <SidebarItem title="Vidoes" icon={<MdOutlineLocalMovies />}/>
        </Sidebar>
        <Files>
          <FileCard name={files[0].name}/>
          <FileCard name={files[1].name}/>
          <FileCard name={files[2].name}/>
        </Files>
        <Preview></Preview>
      </div>
    </div>
  )
}

Layout.defaultProps = {
  title: "File Browser"
}