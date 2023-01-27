import styles from "./Hero.module.scss"
import Image from 'next/image'
import Button from "./Button"
import heroImage from "../assets/hero.jpg"
import Link from "next/link"

export default function Hero() {
  return (
    <div className={styles.hero} style={{
      backgroundImage: `linear-gradient(360deg, rgba(0, 0, 0, 0.59) 0%, rgba(0, 0, 0, 0) 67.72%, rgba(0, 0, 0, 0) 97.16%), url(${heroImage.src})`,
    }}>
      <div className={styles.description}>
        <h2 className={styles.heading}><b>Le damos propósito</b> a tus impuestos</h2>
        <p className={styles.subheading}>Somos una consultora especializada en la implementación de proyectos de inversión pública mediante el mecanismo de Obras por Impuestos</p>
        <div className={styles.cta}>
          <Link href="/faq/0#oxiQuestion"><Button variant="primary" name="¿Qué son las Obras por Impuestos?" onClick={() => { }}></Button></Link>
        </div>
      </div>
    </div>
  );
};

