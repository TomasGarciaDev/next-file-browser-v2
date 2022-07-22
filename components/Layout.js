import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "./Header";

export default function Layout({title, children}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      <main>{children}</main>
    </div>
  )
}

Layout.defaultProps = {
  title: "File Browser"
}