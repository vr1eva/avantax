import Button from "./Button"
import styles from "./About.module.scss"
import aboutImage from "../assets/about.jpg"
import Link from "next/link"
import CountUp from 'react-countup'

const KPIs = [
  {count:30, symbol: "+", sufix: "", legend: "Proyectos" },
  { count: 250, symbol: "+", sufix: "M", legend: "Soles Invertidos" },
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
            {KPIs.map(({ count, symbol, sufix, legend }) => (
              <KPI key={legend} count={count} symbol={symbol} sufix={sufix} legend={legend} />))}
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
          <Link href="/nosotros"><Button className={styles.button} variant="primary" name="Conoce más sobre nosotros" onClick={() => { }} /></Link>
        </div>
      </div>
    </section>
  )
}

function KPI({ count=0, symbol, sufix, legend }) {
  return (
    <div className={styles.kpi}>
      <h1 className={styles.estimation}>
        <span>{symbol}</span>
        <CountUp
          start={0}
          delay={0}
          end={count}
          duration={6}
          enableScrollSpy={true} />
          <span>{sufix}</span>
        <p className={styles.legend}>{legend}</p>
      </h1>
    </div>
  )
}