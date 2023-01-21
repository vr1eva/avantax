import Table from "./components/Table.jsx";
import Button from "./components/Button.jsx"
import styles from "./proyectos.module.scss"

export default function Proyectos() {
  return (
    <div className={styles.proyectos}>
      <h2 className={styles.heading}>Cartera de proyectos</h2>
      <p>Aquí encontrarás los proyectos de todas las entidades públicas a nivel nacional viabilizados a través de obras por impuestos y listos para su ejecución.</p>
      <Table />

      <div className={styles.callToAction}>
        <h2 className={styles.heading}>¿No encuentras
          proyectos de tu interés?</h2>
        <Button className={styles.button} variant="primary" name="Haz click aquí" />
      </div>
    </div>
  )
}