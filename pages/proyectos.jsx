import Table from "./components/Table.jsx";
import Button from "./components/Button.jsx"
import styles from "./proyectos.module.scss"
import Link from "next/link"

export default function Proyectos() {
  return (
    <div className={styles.proyectos}>
      <h2 className={styles.heading}><b>Cartera de </b> proyectos</h2>
      <p>Aquí encontrarás los proyectos de todas las entidades públicas a nivel nacional viabilizados a través de obras por impuestos y listos para su ejecución.</p>
      <Table />

      <div className={styles.cta}>
        <h2 className={styles.ctaHeading}>¿No encuentras
          proyectos de tu interés?</h2>
        <Link className={styles.ctaButton} href="/faq#highlightedQuestion"><Button variant="primary" name="Haz click aquí" /></Link>
      </div>
    </div>
  )
}