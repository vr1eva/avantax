import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from "./components/Footer"
import Header from "./components/Header"
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

      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
