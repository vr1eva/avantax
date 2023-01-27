import styles from "./Footer.module.css"
import Image from "next/image"
import logo from "../assets/logo-color.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"
import instagram from "../assets/instagram.svg"
import { Inter } from '@next/font/google'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

const details = [{ label: "Número de contacto", value: "+51 944 060 980" }, { label: "Correo electrónico", value: "rtorres@avantax.pe" }, { label: "Dirección", value: "Pasaje Mártir Olaya 129,  Oficinas 1905 - Miraflores, Lima - Perú" }]

const links = [
  { title: "Preguntas frecuentes", path: "/faq" },
  { title: "Sobre Nosotros", path: "/nosotros" },
  { title: "Saca una cita con nosotros", path: "/#contact" },
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
      <Image alt="avantax logo" src={logo} />
      <div className={styles.socialDivider} />
      <div className={styles.socialMediaLinks}>
        <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/company/avantax-peru/?viewAsMember=true"><Image alt="linkedin logo" width={24} height={24} src={linkedin} /></a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/avantax_peru"><Image alt="twitter logo" width={24} height={19.5} src={twitter} /></a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/avantax.pe"><Image alt="instagram logo" width={24} height={24} src={instagram} /></a>
      </div>
    </div>
  )
}

function Details() {

  return (
    <div className={styles.details}>
      <div className={styles.column}>
        {details.slice(0,2).map(det => (
          <div className={styles.detail} key={det.label}>
            <p className={styles.detailLabel}>{det.label}</p>
            <p className={styles.detailValue}>{det.value}</p>
          </div>
        ))}
      </div>
      <div className={styles.column}>
        <div className={styles.detail}>
          <p className={styles.detailLabel}>{details[2].label}</p>
          <p className={styles.detailValue}>{details[2].value}</p>
        </div>
      </div>
    </div>
  )
}

function Links() {
  return (
    <div className={styles.links}>
      {links.map(link => (
        <Link key={link.path} className={styles.link} href={link.path}>{link.title}</Link>
      ))}
    </div>
  )
}

function Copyright() {
  return (
    <p className={`${inter.className} ${styles.disclaimer}`}>Avantax © Todos los derechos reservados 2023</p>)
}


export default Footer;