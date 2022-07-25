import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Preview from "./Preview";
import Files from "./Files";

export default function Layout({title}) {
  return (
    <div className={styles.main_container}>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <div className={styles.container}>
        <Sidebar></Sidebar>
        <Files></Files>
        <Preview></Preview>
      </div>
    </div>
  )
}

Layout.defaultProps = {
  title: "File Browser"
}