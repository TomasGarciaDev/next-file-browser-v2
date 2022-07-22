import Head from "next/head";
import styles from "../styles/Layout.module.css"

export default function Layout({title, children}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <main className={styles.container}>{children}</main>
    </div>
  )
}

Layout.defaultProps = {
  title: "File Browser"
}