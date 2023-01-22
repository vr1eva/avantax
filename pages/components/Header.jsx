import Image from 'next/image'
import Link from "next/link"
import Button from "./Button"
import styles from "./Header.module.scss"
import logo from "../assets/logo.svg"
import { LINKS, HIGHLIGHTED_PATH } from "../../constants/links"
import menu from "../assets/menu.svg"
import menuExpanded from "../assets/menuExpanded.svg"
import {useState} from "react"
import linkedinGold from  "../assets/linkedin-gold.svg"
import instagramGold from  "../assets/instagram-gold.svg"
import twitterGold from  "../assets/twitter-gold.svg"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <Image onClick={() => setMenuOpen(!menuOpen)} className={styles.menu} src={menuOpen? menuExpanded: menu} width={30} height={18} /> 
      <div className={`${styles.nav} ${menuOpen? styles.expandedNav: null}`}>
        {LINKS.map((link) => {
          return (
              <Link className={`${styles.link} ${link.path == HIGHLIGHTED_PATH ? styles.specialButton : null}`} key={link.name} href={link.path} >
              <Button
                name={link.name}
                variant={link.path == HIGHLIGHTED_PATH ? "primary" : "default"}
              />
            </Link>)
        })}
        <div className={styles.social}>
          <Image width={28} height={28} src={linkedinGold} />
          <Image width={28} height={28} src={twitterGold} />
          <Image width={28} height={28} src={instagramGold} />
        </div>
      </div>
      
    </>
  )
}

function Logo() {
  const logoDimensions = { width: 149, height: 27 }
  return (
    <h1>
      <Image alt="Avantax Logo" src={logo} {...logoDimensions} />
    </h1>
  )
}

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <Logo />
        <Navbar />
      </header>
    </div>
  );
}
