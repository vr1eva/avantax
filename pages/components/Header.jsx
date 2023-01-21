import Image from 'next/image'
import Link from "next/link"
import Button from "./Button"
import styles from "./Header.module.scss"
import logo from "../assets/logo.svg"
import { LINKS, HIGHLIGHTED_PATH } from "./links"

function Navbar() {
  return (
    <div className={styles.nav}>
      {LINKS.map((link) => {
        return (
          <Link key={link.name} href={link.path} className={styles.link}>
            <Button
              name={link.name}
              variant={link.path == HIGHLIGHTED_PATH ? "primary" : "default"}
            />

          </Link>)
      })}
    </div>
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
