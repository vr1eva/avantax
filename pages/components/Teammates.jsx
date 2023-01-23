import styles from "./Teammates.module.scss"
import ray from "../assets/ray.png"
import debora from "../assets/debora.png"
import mirko from "../assets/mirko.png"
import maria from "../assets/maria.png"
import Carousel from 'nuka-carousel';

import TeamCard from "./TeamCard"

const images = {
  ray,
  debora,
  mirko,
  maria
}

const team = [
  {
    id: "ray", name: "Ray Torres", role: "CEO Avantax", bio: `<span>Comunicador social y egresado del programa de post grado en Gobernabilidad y
Gerencia Política de La Pontificia Universidad Católica del Perú (PUCP). Con estudios
de especialización en la Gestión de Inversiones Público-Privadas a través del
mecanismo OxI. <b>Experimentado gestor OxI desde 2013</b>, donde ha desarrollado
diversos proyectos tanto desde el sector público como el privado.</span>`, orientation: "left", color: "indigo",
  },
  {
    id: "debora", name: "Débora Rodríguez", role: "Asesor Legal", bio: `<span>Abogada por la Universidad San Martín de Porres desde el año 2014. <b>Especializada en Derecho de la Construcción</b>, Administración Contractual de Proyectos de Infraestructura, Contrataciones Públicas, Obras por Impuestos, Concesiones y APP. Profesional CAPM bajo estándares PMI. </span>`, orientation: "right", color: "orange",
  },
  {
    id: "maria", name: "Maria Livaque", role: "Especialista en Inversión Pública", bio: `<span>Economista <b>especialista en Inversión Pública </b>, cuenta con un MBA por La Pontificia Universidad Católica del Perú (PUCP). Profesional orientada a la Gestión Pública y con amplia experiencia en la programación, formulación, evaluación y ejecución de proyectos de inversión pública y privada.</span>`, orientation: "left", color: "green",
  },
  {
    id: "mirko", name: "Mirko Flores", role: "Jefe de Oficina Técnica", bio: `<span>Ingeniero Civil con maestría en Ingeniería Estructural por la Brunel University London del Reino Unido. Con <b>amplia experiencia en la gestión y desarrollo de proyectos de construcción</b> en el sector inmobiliario e industrial, así como en la dirección de proyectos de infraestructura bajo la metodología PMI.</span>`, orientation: "right", color: "indigo",
  },
]

export default function Teammates() {
  return (
    <div className={styles.teammates}>
      <h2 className={styles.heading}>Conoce a nuestro equipo</h2>
      <div className={styles.teamcards}>
       <div className={styles.carousel} >
        <Carousel renderCenterLeftControls={() => (null)} renderCenterRightControls={() => (null)}>
        {
            team.map(teammate => (
              <TeamCard key={teammate.id} name={teammate.name} orientation={teammate.orientation} bio={teammate.bio} image={images[teammate.id]} role={teammate.role} color={teammate.color} />
            ))
          }
        </Carousel>
        </div>
        <div className={styles.normalCards}>
        {
          team.map(teammate => (
            <TeamCard key={teammate.id} name={teammate.name} orientation={teammate.orientation} bio={teammate.bio} image={images[teammate.id]} role={teammate.role} color={teammate.color} />
          ))
        }
        </div>
      </div>
    </div >
  )
}

