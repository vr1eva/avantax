import styles from "./Hero.module.scss"
import Image from 'next/image'
import Button from "./Button"
import hero from "../assets/hero.jpg"

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.description}>
        <h2 className={styles.heading}><b>Le damos propósito</b> a tus impuestos</h2>
        <p className={styles.subheading}>Somos una consultora especializada en la implementación de proyectos de inversión pública mediante el mecanismo de Obras por Impuestos</p>
        <Button variant="primary" name="¿Qué son las Obras por Impuestos?" onClick={() => { }}></Button>
      </div>
      <Image className={styles.image} width={1440} height={678} alt="Niño tomando agua" src={hero} />

    </div>
  );
};

