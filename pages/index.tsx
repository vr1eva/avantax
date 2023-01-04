import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Avantax / Homepage</title>
        <meta name="description" content="Solucion de impuestos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>

      </main>

      <Footer text="Diseñado por Camila Santa Maria y programado por Bruno Gonzales" />

    </div>
  )
}

export default Home
