import styles from "./faq.module.scss"
import Image from "next/image"
import expanded from "./assets/expanded.svg"
import notExpanded from "./assets/notExpanded.svg"
import { useReducer } from "react"

const initialState = [
  {
    question: "¿Qué son las OxI?", answer: `El Certificado de Inversión Pública Regional y Local (CIPRL), es un documento emitido
por el Ministerio de Economía y Finanzas, a través de la Dirección Nacional del Tesoro Público, que tiene por finalidad la cancelación del monto que invierta la empresa privada en la ejecución de los proyectos de obras por impuestos. Este certificado se utiliza para  el pago a cuenta o regularización del impuesto a la renta.`, expanded: false
  },
  {
    question: "¿Qué es el CIPRL?", answer: `El Certificado de Inversión Pública Regional y Local (CIPRL), es un documento emitido
por el Ministerio de Economía y Finanzas, a través de la Dirección Nacional del Tesoro Público, que tiene por finalidad la cancelación del monto que invierta la empresa privada en la ejecución de los proyectos de obras por impuestos. Este certificado se utiliza para  el pago a cuenta o regularización del impuesto a la renta.`, expanded: false
  },
  {
    question: "¿El CIPRL puede ser negociable?", answer: `El Certificado de Inversión Pública Regional y Local (CIPRL), es un documento emitido
por el Ministerio de Economía y Finanzas, a través de la Dirección Nacional del Tesoro Público, que tiene por finalidad la cancelación del monto que invierta la empresa privada en la ejecución de los proyectos de obras por impuestos. Este certificado se utiliza para  el pago a cuenta o regularización del impuesto a la renta.`, expanded: false
  },
  {
    question: "¿El CIPRL puede fraccionarse?", answer: `El Certificado de Inversión Pública Regional y Local (CIPRL), es un documento emitido
por el Ministerio de Economía y Finanzas, a través de la Dirección Nacional del Tesoro Público, que tiene por finalidad la cancelación del monto que invierta la empresa privada en la ejecución de los proyectos de obras por impuestos. Este certificado se utiliza para  el pago a cuenta o regularización del impuesto a la renta.`, expanded: false
  },
  {
    question: "¿Las empresas pueden proponer nuevos proyectos a las entidades públicas?", answer: `El Certificado de Inversión Pública Regional y Local (CIPRL), es un documento emitido
por el Ministerio de Economía y Finanzas, a través de la Dirección Nacional del Tesoro Público, que tiene por finalidad la cancelación del monto que invierta la empresa privada en la ejecución de los proyectos de obras por impuestos. Este certificado se utiliza para  el pago a cuenta o regularización del impuesto a la renta.`, expanded: false
  },
  {
    question: "¿Qué empresas pueden participar en OxI?", answer: `El Certificado de Inversión Pública Regional y Local (CIPRL), es un documento emitido
por el Ministerio de Economía y Finanzas, a través de la Dirección Nacional del Tesoro Público, que tiene por finalidad la cancelación del monto que invierta la empresa privada en la ejecución de los proyectos de obras por impuestos. Este certificado se utiliza para  el pago a cuenta o regularización del impuesto a la renta.`, expanded: false
  },
  {
    question: "¿Qué entidades públicas pueden aplicar en OxI?", answer: `El Certificado de Inversión Pública Regional y Local (CIPRL), es un documento emitido
por el Ministerio de Economía y Finanzas, a través de la Dirección Nacional del Tesoro Público, que tiene por finalidad la cancelación del monto que invierta la empresa privada en la ejecución de los proyectos de obras por impuestos. Este certificado se utiliza para  el pago a cuenta o regularización del impuesto a la renta.`, expanded: false
  },
  {
    question: "¿Cuáles son las fases de un proyecto de obras por impuestos?", answer: `El Certificado de Inversión Pública Regional y Local (CIPRL), es un documento emitido
por el Ministerio de Economía y Finanzas, a través de la Dirección Nacional del Tesoro Público, que tiene por finalidad la cancelación del monto que invierta la empresa privada en la ejecución de los proyectos de obras por impuestos. Este certificado se utiliza para  el pago a cuenta o regularización del impuesto a la renta.`, expanded: false
  },
]

const reducer = (state, action) => {
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
  const [faqs, dispatch] = useReducer(reducer, initialState)
  return (
    <div className={styles.faq}>
      <h2 className={styles.heading}>Preguntas Frecuentes</h2>
      <p>Aclaramos todas las dudas que tengas ¿Aún tienes preguntas? <b className={styles.highlight}>Ponte en contacto con nuestro equipo.</b></p>
      <div className={styles.faqs}>
        {faqs.map(faq => (
          <div key={faq.question} className={styles.prompt} >
            <div className={styles.row}>
              <h3 className={styles.question}>{faq.question}</h3>
              <Image alt="see answer button" onClick={() => dispatch({ type: "TOGGLE_FAQ", payload: faq.question })} className={styles.expandable} src={faq.expanded ? expanded : notExpanded} />
            </div>
            {faq.expanded ? <p className={styles.answer}>{faq.answer}</p> : null}
          </div>
        ))}
      </div>
    </div>
  )
}
