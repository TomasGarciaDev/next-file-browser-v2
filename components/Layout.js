import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Preview from "./Preview";
import PreviewFile from "./PreviewCard";
import Files from "./Files";
import FileCard from "./FileCard";
import SidebarItem from "./SidebarItem";
import { IoDocumentSharp } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdOutlineLocalMovies } from "react-icons/md";
import { useState } from "react";

export default function Layout({title, children}) {
  const [files, setFiles] = useState([])
  const [file, setFile] = useState([])

  // console.log(files)
  console.log(file)

  return (
    <div className={styles.main_container}>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <div className={styles.container}>
        <Sidebar>
          <SidebarItem title="Documents" icon={<IoDocumentSharp />} setFiles={setFiles}/>
          <SidebarItem title="Pictures" icon={<AiOutlinePicture />} setFiles={setFiles}/>
          <SidebarItem title="Music" icon={<BsMusicNoteBeamed />} setFiles={setFiles}/>
          <SidebarItem title="Videos" icon={<MdOutlineLocalMovies />} setFiles={setFiles}/>
        </Sidebar>
        <Files >
          {files.length !== 0 && files.map(file => <FileCard file={file} id={file.id} key={file.id} name={file.name} image={file.image} setFile={setFile}/>)}
        </Files>
        <Preview>
          {file.length !== 0 && <PreviewFile file={file}/>}
        </Preview>
      </div>
    </div>
  )
}

Layout.defaultProps = {
  title: "File Browser"
}