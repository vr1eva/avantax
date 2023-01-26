import Image from 'next/image'
import Link from "next/link"
import Button from "./Button"
import styles from "./Header.module.scss"
import logo from "../assets/logo.svg"
import { LINKS, HIGHLIGHTED_PATH } from "../../constants/links"
import menu from "../assets/menu.svg"
import menuExpanded from "../assets/menuExpanded.svg"
import {useState, useEffect} from "react"
import linkedinGold from  "../assets/linkedin-gold.svg"
import instagramGold from  "../assets/instagram-gold.svg"
import twitterGold from  "../assets/twitter-gold.svg"
import { useRouter } from "next/router";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setMenuOpen(false)  
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
    // eslint-disable-next-line
  }, [])


  return (
    <>
      <Image alt="open menu" onClick={() => setMenuOpen(!menuOpen)} className={styles.menu} src={menuOpen? menuExpanded: menu} width={30} height={18} /> 
      <div className={`${styles.nav} ${menuOpen? styles.expandedNav: null}`}>
        {LINKS.map((link) => {
          return (
              <Link scroll={false} className={`${styles.link} ${link.path == HIGHLIGHTED_PATH ? styles.specialButton : null}`} key={link.name} href={link.path} >
              <Button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`${styles.linkButton} ${router.asPath == link.path ? styles.activeLink : null}`}
                name={link.name}
                variant={link.path == HIGHLIGHTED_PATH ? "primary" : "default"}
              />
            </Link>)
        })}
        <div className={styles.social}>
          <Link href="https://www.linkedin.com/company/avantax-peru/?viewAsMember=true"><Image alt="linkedin" width={28} height={28} src={linkedinGold} /> </Link>
          <Link href="https://twitter.com/avantax_peru"><Image alt="twitter" width={28} height={28} src={twitterGold} /></Link>
          <Link href="https://www.instagram.com/avantax.pe/"><Image alt="instagram" width={28} height={28} src={instagramGold} /></Link>
        </div>
      </div>
      
    </>
  )
}

function Logo() {
  return (
    <h1 className={styles.logoContainer}>
      <Image alt="Avantax Logo" src={logo} className={styles.logo} />
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
