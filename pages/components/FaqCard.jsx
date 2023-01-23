import styles from "./FaqCard.module.scss"
import Button from "./Button"
import Link from "next/link"
import faqCardImage from "../assets/faqCardImage.jpg"

export default function FaqCard() {
  return (
    <div className={styles.faq} style={{
      backgroundImage: `url(${faqCardImage.src})`,
      width: '100%',
    }} >
      <div className={styles.card}>
        <h2 className={styles.heading}>¿Cómo es el proceso de Obras por Impuestos?</h2>
        <p className={styles.paragraph}>El proceso de Obras por Impuestos se da cuando la empresa destina parte del pago de su impuesto a la renta al financiamiento y ejecución de un determinado proyecto de prioridad pública. Una vez finalizada la ejecución o avance del proyecto el Tesoro Público <span className={styles.highlight}>devuelve a la empresa el monto invertido a través del CIPRL</span> (Certificado de Inversión Pública Regional y Local) que podrá ser utilizado para los pagos a cuenta y de regularización del impuesto a la renta.</p>
        <div className={styles.actions} >
          <Link href="/faq#highlightedQuestion"><Button name="Ir a preguntas frecuentes" variant="light" /></Link>
          <Link href="/#contact"><Button name="Contacta con nosotros" variant="primary" /></Link>
        </div>
      </div>
    </div>
  )
}