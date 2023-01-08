import styles from "./Hero.module.scss"
import Image from 'next/image'
import hero from "../assets/hero.jpg"

export default function Hero() {
  return (
    <div className="hero">
      <h2 className={styles.heading}><b>Le damos propósito</b> a tus impuestos</h2>
      <Image className={styles.image} width={1440} height={678} alt="Niño tomando agua" src={hero} />
    </div>
  );
};

