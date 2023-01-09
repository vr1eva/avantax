import styles from "./Benefits.module.scss";
import Card from "./Card"
import Button from "./Button"
import buildings from "../assets/buildings.svg"
import convert from "../assets/convert.svg"
import cupheart from "../assets/cupheart.svg"
import status from "../assets/status.svg"
import Image from "next/image"

const icons = { buildings, convert, cupheart, status }
const buttonName = "Comienza a invertir"

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

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <h2 className={styles.heading}>¿Qué beneficios brindan las Obras por Impuestos al país?</h2>
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

      <div className={styles.buttonRow}>
        <Button variant="primary" onClick={() => { }} name={buttonName} />
      </div>
    </section>
  )
}