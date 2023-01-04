import logo from "../assets/logo.svg"
import styles from "./Navbar.module.css"
import Image from 'next/image'
import Button from "./Button"
import { useRouter } from 'next/router';
import Link from "next/link"


export const NAVBARLINKS = [
  { name: 'Inicio', link: '/' },
  { name: 'Beneficios', link: '/beneficios' },
  { name: 'Nosotros', link: '/nosotros' },
  { name: 'Proyectos', link: '/Proyectos' },
  { name: 'Contacto', link: '/contacto' },
];
export default function Navbar() {
  return (
    <div className={styles.nav}>
      <h1>
        <Image alt="Avantax Logo" src={logo} width={149} height={27} />
      </h1>
      <div className={styles.navbarLinks}>
        <Link href="/" >Inicio</Link>
        <Link href="/beneficios" >Beneficios</Link>
        <Link href="/nosotros" >Nosotros</Link>
        <Link href="/proyectos" >Proyectos</Link>
        <Button text="Contáctanos" onClick={() => { }} />
      </div>
    </div >
  )
}