import styles from "./Footer.module.css"
import Image from "next/image"
import logo from "../assets/logo-color.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"
import instagram from "../assets/instagram.svg"
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const details = [{ label: "Número de contacto", value: "+51 944 060 980" }, { label: "Correo electrónico", value: "rtorres@avantax.pe" }, { label: "Dirección", value: "Pasaje Mártir Olaya 129,  Oficinas 1905 - Miraflores, Lima - Perú" }]

const links = [
  { title: "Preguntas frecuentes", href: "#" },
  { title: "Sobre Nosotros", href: "#" },
  { title: "Saca una cita con nosotros", href: "#" },
]

function Footer() {
  return (
    <div className={styles.footer} >
      <div className={styles.row}>

        <Social />
        <Details />
        <Links />
      </div>
      <div className={styles.divider} />
      <Copyright />
    </div>
  );
};

function Social() {
  return (
    <div className={styles.social}>
      <Image src={logo} />
      <div className={styles.socialDivider} />
      <div className={styles.socialMediaLinks}>
        <a href="#"><Image width={24} height={24} src={linkedin} /></a>
        <a href="#"><Image width={24} height={19.5} src={twitter} /></a>
        <a href="#"><Image width={24} height={24} src={instagram} /></a>
      </div>
    </div>
  )
}

function Details() {
  return (
    <div className={styles.details}>
      {details.map(det => (
        <div>
          <p className={styles.detailLabel}>{det.label}</p>
          <p className={styles.detailValue}>{det.value}</p>
        </div>
      ))}
    </div>

  )
}

function Links() {
  return (
    <div className={styles.links}>
      {links.map(link => (
        <a className={styles.link} href={link.href}>{link.title}</a>
      ))}
    </div>
  )
}

function Copyright() {
  return (
    <p className={`${inter.className} ${styles.disclaimer}`}>Avantax © Todos los derechos reservados 2023</p>)
}


export default Footer;