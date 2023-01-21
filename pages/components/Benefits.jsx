import styles from "./Benefits.module.scss";
import Card from "./Card"
import Button from "./Button"
import buildings from "../assets/buildings.svg"
import convert from "../assets/convert.svg"
import cupheart from "../assets/cupheart.svg"
import status from "../assets/status.svg"
import medal from "../assets/medal.svg"
import ranking from "../assets/ranking.svg"
import award from "../assets/award.svg"
import money from "../assets/money.svg"
import Image from "next/image"
const icons = { buildings, convert, cupheart, status, medal, ranking, award, money }


export default function() {
  return (
    <section className={styles.benefits} id="beneficios">
      <Benefits />
      <CompanyBenefits />
      <CallToAction />
    </section>
  )
}

export const BENEFITS = [
  {
    title: "Cierre de Brechas",
    description: "Contribuyen al cierre de brechas de infraestructura.",
    icon: "buildings"
  },
  {
    title: "Economía Local",
    description: "Dinamizan la economía local al generar empleo.",
    icon: "convert"
  },
  {
    title: "Impacto Social",
    description: "Generan un impacto social positivo.",
    icon: "cupheart"
  },
  {
    title: "Crecimiento del PBI",
    description: "Contribuyen al crecimiento de Producto Bruto Interno.",
    icon: "status"
  },
]



function Benefits() {
  const heading = "¿Qué beneficios brindan las Obras por Impuestos al país?"
  return (
    <div className={styles.benefit}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.cards}>
        {BENEFITS.map(item => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
          >
            <Image
              alt={"Benefit" + item.title}
              src={icons[item.icon]}
              width={70}
              height={70}
            />
          </Card>
        ))}
      </div>

    </div>
  )
}

const COMPANY_BENEFITS = [
  {
    title: "Responsabilidad Social",
    description: "Pueden manejar sus programas de Responsabilidad Social a coste cero.",
    icon: "medal"
  },
  {
    title: "Mejor posicionamiento",
    description: "Pueden mejorar su reputación y posicionamiento también a coste cero.",
    icon: "ranking"
  },
  {
    title: "Competitividad",
    description: "Pueden destinar sus impuestos para obras puntuales, las cuales podrían elevar la competitividad de la comunidad y de la empresa.",
    icon: "award"
  },
  {
    title: "Retorno de utilidades",
    description: "Pueden obtener un retorno de utilidades si se encargan de la ejecución de obra.",
    icon: "money"
  },
]

function CompanyBenefits() {
  const heading = "¿Qué beneficios brindan las Obras por Impuestos para las empresas que las financian?"
  return (
    <div className={styles.benefit}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.cards}>
        {COMPANY_BENEFITS.map(item => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
          >
            <Image
              alt={"Benefit" + item.title}
              src={icons[item.icon]}
              width={70}
              height={70}
            />
          </Card>
        ))}
      </div>
    </div>
  )
}

function CallToAction() {
  const buttonName = "Comienza a invertir"
  return (
    <div className={styles.buttonRow}>
      <Button variant="primary" onClick={() => { }} name={buttonName} />
    </div>
  )
}