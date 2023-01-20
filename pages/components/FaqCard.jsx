import styles from "./FaqCard.module.scss"
import Button from "./Button"
import Image from "next/image"
import faqCardImage from "../assets/faqCardImage.jpg"

export default function() {
  return (
    <div className={styles.faq}>
      <div className={styles.card}>
        <h2 className={styles.heading}>¿Cómo es el proceso de Obras por Impuestos?</h2>

        <p className={styles.paragraph}>El proceso de Obras por Impuestos se da cuando la empresa destina parte del pago de su impuesto a la renta al financiamiento y ejecución de un determinado proyecto de prioridad pública. Una vez finalizada la ejecución o avance del proyecto el Tesoro Público   (Certificado de Inversión Pública Regional y Local) que podrá ser utilizado para los pagos a cuenta y de regularización del impuesto a la renta.</p>


        <div className={styles.actions} >
          <Button name="Ir a preguntas frecuentes" variant="light" />
          <Button name="Contacta con nosotros" variant="primary" />
        </div>

      </div>

      <Image className={styles.image} src={faqCardImage} width={1440} height={372} />
    </div>
  )
}