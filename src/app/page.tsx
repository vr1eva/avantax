import { Metadata } from 'next'
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import About from "@/components/about"
import Services from "@/components/services"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: 'Avantax / Homepage',
  description: "Solución de obras por impuestos"
}

export default function Home() {
  return <main>
    <Hero />
    <Benefits />
    <About />
    <Services />
    <Contact />
  </main>
}