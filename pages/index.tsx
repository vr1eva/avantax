import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Benefits from "./components/Benefits"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Avantax / Homepage</title>
        <meta name="description" content="Solucion de impuestos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />

      <Benefits />

      <main>
      </main>

      <Footer text="Diseñado por Camila Santa Maria y programado por Bruno Gonzales" />
    </div>
  )
}

export default Home
