import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from "./components/Hero"
import Benefits from "./components/Benefits"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Avantax / Homepage</title>
        <meta name="description" content="Solucion de impuestos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Benefits />
        <About />
        <Services />
        <Contact />
      </main>
    </div>
  )
}

export default Home
