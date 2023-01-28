import styles from "./faq.module.scss"
import Image from "next/image"
import Link from "next/link"
import expanded from "../assets/expanded.svg"
import notExpanded from "../assets/notExpanded.svg"
import { useReducer} from "react"
import Head from "next/head"
import { useRouter } from "next/router";

const initialState = [
  {
    question: "¿Qué son las OxI?", answer: `Son una forma de pago del impuesto a la renta de tercera categoría a través del financiamiento de obras públicas de envergadura nacional, regional o local, reguladas por la Ley 29230. Esta modalidad de inversión público-privada genera un gran impacto en la vida de las personas, permitiéndoles acceder a nueva infraestructura y servicios públicos de calidad en tiempo récord, debido a su agilidad. De este modo, las empresas siendo socialmente responsables, contribuyen al cierre de brechas mientras mejoran su reputación y posicionamiento.`, expanded: false
  },
  {
    question: "¿Qué es el CIPRL?", answer: `El Certificado de Inversión Pública Regional y Local (CIPRL), es un documento emitido por el Ministerio de Economía y Finanzas, a través de la Dirección Nacional del Tesoro Público, que tiene por finalidad la cancelación del monto que invierta la empresa privada en la ejecución de los proyectos de obras por impuestos. Este certificado se utiliza para el pago a cuenta o regularización del impuesto a la renta.`, expanded: false
  },
  {
    question: "¿El CIPRL puede ser negociable?", answer: `Sí. El CIPRL tiene carácter de NEGOCIABLE siempre y cuando la empresa que financia la obra no se encarga directamente de la ejecución de la misma, es decir, contrata a una empresa constructora para ello. De esta manera el CIPRL se hace NEGOCIABLE y puede ser o bien utilizado por la empresa o vendido a otras empresas.
    `, expanded: false
  },
  {
    question: "¿El CIPRL puede fraccionarse?", answer: `Sí. La empresa privada, de acuerdo a sus necesidades, puede solicitar a la Dirección Nacional del Tesoro Público el fraccionamiento de su CIPRL por montos iguales o menores al 50% del impuesto a la renta pagado en el ejercicio anterior. Posteriormente, si el CIPRL tiene carácter de NEGOCIABLE, el saldo puede ser comercializado.`, expanded: false
  },
  {
    question: "¿Qué empresas pueden participar en OxI?", answer: `Podrán participar las personas jurídicas de derecho privado, nacionales o extranjeras, que no estén sujetas a los sistemas administrativos del sector público financiero (Presupuesto Público, Endeudamiento Público), cuyo capital sea cien por ciento (100%) privado, incluidas aquéllas que hayan suscrito contratos o convenios de estabilidad con el Estado peruano.`, expanded: false
  },
  {
    question: "¿Cuáles son las fases de un proyecto de obras por impuestos?", expanded: false
  },
  {
    question: "¿Qué entidades públicas pueden aplicar en OxI?", answer: `Pueden aplicar las entidades públicas del gobierno nacional (Ministerios), los gobiernos regionales, los gobiernos locales (Municipios Provinciales y Distritales), las juntas de coordinación interregional, las mancomunidades regionales, las mancomunidades municipales y las universidades públicas.`, expanded: false
  },
  {
    question: "¿Las empresas pueden proponer nuevos proyectos a las entidades públicas?", answer: `Sí. Si una empresa identifica que un servicio público no se está brindando por la inexistencia de un proyecto, puede proponer a las entidades públicas ideas de proyectos para su desarrollo mediante el mecanismo OxI. A través de una carta de iniciativa privada la empresa hace llegar a la entidad pública su intención de formular y ejecutar un determinado proyecto de inversión bajo la modalidad de OxI. La entidad pública en cuestión es la encargada de evaluar dicha solicitud y emitir una respuesta.`, expanded: false
  },
]


const reducer =(state, action) => {
  switch (action.type) {
    case "TOGGLE_FAQ":
      return state.map(faq => {
        if (faq.question === action.payload) {
          return { ...faq, expanded: !faq.expanded }
        }
        return faq
      })
    default:
      return state
  }
}

export default function Faq() {
  const router = useRouter();
  const { openedQuestionIndex } = router.query
  const [faqs, dispatch] = useReducer(reducer, initialState.map((question, questionIndex)=> {
    if(questionIndex == openedQuestionIndex) {
      return {...question, expanded: true }
    }
    return {...question}
  }))

  return (
    <> <Head>
    <title>Avantax / FAQ</title>
    <meta name="description" content="Solucion de impuestos" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div className={styles.faq}>
      <h2 className={styles.heading}>Preguntas Frecuentes</h2>
      <p>Aclaramos todas las dudas que tengas ¿Aún tienes preguntas? <Link href="/#contact"><b className={styles.highlight}>Ponte en contacto con nuestro equipo.</b></Link></p>
      <div className={styles.faqs}>
        {faqs.map((faq)=> {
          const highlightedQuestion = faq.question === "¿Las empresas pueden proponer nuevos proyectos a las entidades públicas?"
          const phasesQuestion = faq.question ===  `¿Cuáles son las fases de un proyecto de obras por impuestos?`
          return (
            <div key={faq.question} className={`${highlightedQuestion ? styles.highlightedQuestion: ""} ${styles.prompt}`} id={highlightedQuestion ? "highlightedQuestion": ""}>
              <div className={styles.row}>
                <h3 className={styles.question}>{faq.question}</h3>
                <Image prority={true} alt="see answer button" onClick={() => dispatch({ type: "TOGGLE_FAQ", payload: faq.question })} className={styles.expandable} src={faq.expanded ? expanded : notExpanded} />
              </div>
              {faq.expanded ? <div className={styles.answer}>{ phasesQuestion? 
              (<>
                <span>Son 5.</span> 
                <ul>
                  <li>FASE 1: Priorización del proyecto a financiarse</li>
                  <li>FASE 2: Actos previos al proceso de licitación (Informe Previo Contraloría)</li>
                  <li>FASE 3: Licitación</li>
                  <li>FASE 4: Ejecución de obra FASE 5: Obtención del CIPRL</li>
                </ul>
              </>):faq.answer
                }
                </div> : null}
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}
