import styles from "./nosotros.module.scss"
import placeholders from "./assets/placeholders.jpg"
import Image from "next/image"

export default function() {
  return (
    <div className={styles.nosotros}>
      <div className={styles.hero}>
        <h1 className={styles.heading}><b>Conoce más</b> sobre nosotros</h1>
        <div className={styles.row}>
          <Image src={placeholders} />
          <p className={styles.paragraph}>Somos un grupo de profesionales peruanos comprometidos con el cierre de brechas de infraestructura en el país. Brindamos asesoría especializada en el mecanismo de <span>Obras por Impuestos (OxI)</span>, donde las empresas participan a través del canje del pago de sus impuestos por el financiamiento y ejecución de proyectos de construcción o mejora de infraestructura en la comunidad, como la construcción de carreteras, escuelas o parques públicos.<br /><br />

            A lo largo de nuestras trayectorias profesionales hemos articulado un portafolio de <span>más de 30 proyectos</span> de diversos sectores como salud, educación, transporte, seguridad ciudadana y electrificación, cuyo monto total de inversión supera <span>los 250 millones de soles.</span></p>
        </div>
      </div>
    </div>)
}