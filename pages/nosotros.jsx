import styles from "./nosotros.module.scss"
import Image from "next/image"
import FaqCard from "./components/FaqCard"
import Teammates from "./components/Teammates"
import nosotros from "./assets/nosotros.png"
import nosotrosMobile from "./assets/nosotros-mobile.png"
import useDeviceSize from "./utiles/useDeviceSize"
import Head from "next/head"

export default function Nosotros() {
  const [width] = useDeviceSize();

  const isMobile = width <= 768;
  return (
<>
    <Head>
        <title>Avantax / Nosotros</title>
        <meta name="description" content="Solucion de impuestos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.nosotros}>
      <div className={styles.hero}>
        <h1 className={styles.heading}><b>Conoce más</b> sobre nosotros</h1>
        <div className={styles.row}>
          <Image priority={true} className={styles.image} alt="images of Avantax employees" src={isMobile?  nosotrosMobile: nosotros } />
          <p className={styles.paragraph}>Somos un grupo de profesionales peruanos comprometidos con el cierre de brechas de infraestructura en el país. Brindamos asesoría especializada en el mecanismo de <span>Obras por Impuestos (OxI)</span>, donde las empresas participan a través del canje del pago de sus impuestos por el financiamiento y ejecución de proyectos de construcción o mejora de infraestructura en la comunidad, como la construcción de carreteras, escuelas o parques públicos.<br /><br />
            A lo largo de nuestras trayectorias profesionales hemos articulado un portafolio de <span>más de 30 proyectos</span> de diversos sectores como salud, educación, transporte, seguridad ciudadana y electrificación, cuyo monto total de inversión supera <span>los 250 millones de soles.</span></p>
        </div>
      </div>
      
      <FaqCard />

      <Teammates />

    </div></>)
}

