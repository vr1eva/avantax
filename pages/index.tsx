import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from "./components/Navbar"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Avantax / Homepage</title>
        <meta name="description" content="Solucion de impuestos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <p>Diseñado por Camila Santa María y programado por Bruno Gonzales para Avantax</p>

      </footer>
    </div>
  )
}

export default Home
