import Image from "next/image"
import Button from "./Button"
import styles from "./About.module.scss"
import aboutImage from "../assets/about.jpg"



const KPIs = [
  { estimation: "+30", legend: "Proyectos" },
  { estimation: "+250M", legend: "Soles Invertidos" },
]

export default function About() {
  return (
    <section className={styles.about} style={{
      backgroundImage: `url(${aboutImage.src})`,
      width: '100%',
    }}>
      <div className={styles.modal}>
        <div className={styles.rowContainer}>
          <div className={styles.kpis}>
            {KPIs.map(({ estimation, legend }) => (
              <KPI key={legend} estimation={estimation} legend={legend} />))}
          </div>
          <div className={styles.content}>
            <h2 className={styles.heading}>Sobre Nosotros</h2>
            <p className={styles.description}>Somos un grupo de profesionales peruanos comprometidos con el cierre de brechas
              de infraestructura en el país. <br /> <br />
              Brindamos asesoría especializada en el mecanismo de
              <span className={styles.highlight}> Obras por Impuestos (OxI)</span>,
              donde las empresas participan a través del canje de susx
              impuestos por el financiamiento y ejecución de proyectos de construcción o mejora de infraestructura en la comunidad, como la construcción de carreteras, escuelas o
              parques públicos.</p>
          </div>
        </div>
        <div className={styles.cta}>
          <Button className={styles.button} variant="primary" name="Conoce más sobre nosotros" onClick={() => { }} />
        </div>
      </div>
    </section>
  )
}

function KPI({ estimation, legend }) {
  return (
    <div className={styles.kpi}>
      <h1 className={styles.estimation}>{estimation} <p className={styles.legend}>{legend}</p></h1>
    </div>
  )
}