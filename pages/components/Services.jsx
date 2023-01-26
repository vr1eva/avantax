import board from "../assets/board.svg"
import tasks from "../assets/tasks.svg"
import verified from "../assets/verified.svg"
import user from "../assets/user.svg"
import approval from "../assets/approval.svg"
import arrowLeft from "../assets/arrowLeft.svg"
import arrowRight from "../assets/arrowRight.svg"
import styles from "./Services.module.scss"
import { colors } from "../../constants/colors"
import Image from "next/image"
import Button from "./Button"
import { useState } from "react"
import Carousel from 'nuka-carousel';

const icons = {
  board, tasks, verified, user, approval
}
const STAGES = [
  {
    background: "purple",
    color: "white",
    icon: "board",
    title: "Fase 1",
    items: ["Evaluación técnica, legal y económica del proyecto de interés, y de ser el caso, formulación y reformulación de estudios de inversión pública.", "Relacionamiento con funcionarios públicos y comunidad vinculados al proyecto."]
  },
  {
    icon: "tasks",
    color: "black",
    background: "mintGreen",
    title: "Fase 2",
    items: ["Desarrollo de documentación previa al proceso de adjudicación del proyecto.", "Proceso de selección privado de empresa contratista encargada de la ejecución del proyecto."]
  },
  {
    icon: "verified",
    background: "orange",
    color: "white",
    title: "Fase 3",
    items: ["Proceso de adjudicación pública del proyecto y otorgamiento de buena pro."]
  },
  {
    icon: "user",
    background: "beige",
    color: "black",
    title: "Fase 4",
    items: ["Gerencia y supervisión del proyecto a través de nuestra PMO.", "Administración contractual del proyecto."]
  },
  {
    icon: "approval",
    color: "white",
    background: "indigo",
    title: "Fase 5",
    items: ["Obtención del CIPRL. "]
  },
]
export default function Services() {
  const [position, setPosition] = useState(0)
  return (
    <>
    <section className={styles.services}>
      <div className={styles.content} >
        <h2 className={styles.heading}>Nuestros servicios</h2>
        <p className={styles.description}>Creemos que las empresas que apuestan
          por Obras por Impuestos no deben distraerse de sus actividades cotidianas relacionadas
          a su <span className={styles.highlight}>core business</span>, por ello, hemos desarrollado nuestra consultoría en la modalidad <span className={styles.highlight}>Llave
            en Mano</span> para encargarnos del desarrollo
          de cada una de las cinco fases del mecanismo, culminando el proceso exitosamente
          con la entrega del CIPRL. </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.cardsList}>
          <Carousel c scrollMode="remainder" adaptiveHeight renderBottomCenterControls={({nextSlide, previousSlide}) => {
            return (
            <div className={styles.controls}>
                <Button variant="light" onClick={previousSlide}><Image src={arrowLeft} alt="boton para girar a la izquierda" /> </Button>
                <Button variant="light" onClick={nextSlide}><Image src={arrowRight} alt="boton para girar a la derecha" /></Button> 
              </div>
            )
          }} cellSpacing={25} disableEdgeSwiping slidesToShow={1} renderCenterLeftControls={() => (null)} renderCenterRightControls={() => (null)} >
            {STAGES.slice(position).concat(STAGES.slice(0, position)).map(({ title, items, color, icon, background }) => (
              <Card key={title} title={title} items={items} color={color} icon={icons[icon]} background={background} />
            ))}
          </Carousel>
          
        </div >
      </div>
    </section>
     
   </>
  );
}


function Card({ title, items, color, background, icon }) {
  return (
    <div className={styles.card} style={{ color: color, background: colors[background] }}>
      <h3 className={styles.cardHeading}>{title}</h3>
      <ul className={styles.cardItems}>
        {items.map(item => (
          <li className={styles.cardItem} key={item}>{item}</li>
        ))}</ul>
      <Image alt="service" key={title} src={icon} className={styles.cardImage} />
    </div>
  )
}


