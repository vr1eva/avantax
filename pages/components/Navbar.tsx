import logo from "../assets/logo.svg"
import styles from "./Navbar.module.css"
import Image from 'next/image'
import NavbarItem from './NavbarItem'
import Button from "./Button"

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <h1>
        <Image src={logo} width={149} height={27} />
      </h1>
      <div className={styles.navbarItems}>
        <NavbarItem label="Inicio" />
        <NavbarItem label="Beneficios" />
        <NavbarItem label="Nosotros" />
        <NavbarItem label="Proyectos" />
        <Button text="Contáctanos" onClick={()=>{}}/>
      </div>
    </div>
  )
}