import styles from "./Contact.module.scss"
import Button from "./Button"
import { Poppins } from '@next/font/google'
const poppins = Poppins({
  weight: ['400', '500', '600', "900"],
  subsets: ['latin'],
  variable: "--poppins",
  display: "swap"
})

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.contactModal}>
      <h2 className={styles.heading}>Empecemos a trabajar juntos</h2>
      <p className={styles.description}>Ponte en contacto con nosotros y te responderemos tan rápido como podamos</p>
      <Form />
      </div>
    </div>
  )
}

function doNothing() { }

function Form() {
  return (
    <form className={styles.form} onSubmit={doNothing} id="contacto" name="contact" method="POST" data-netlify="true" action="/success">
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" 
  value="Mensaje nuevo de avantax.pe" />
      <div className={styles.row}>
        <TextField name="name" label="Nombre" placeholder="Tu nombre" />
        <TextField name="surname" label="Apellido" placeholder="Tu apellido" />
      </div>
      <div className={styles.row}>
        <TextField name="email" label="Correo electrónico" placeholder="tunombre@correo.com" />
      </div>
      <div className={styles.row}>
        <TextField name="tel" type="tel" label="Número de teléfono" placeholder="+51 999 999 999" />
      </div>
      <div className={styles.row}>
        <TextField name="company" label="Empresa" placeholder="El nombre de la empresa" />
        <TextField name="role" label="Puesto" placeholder="Tu puesto" />
      </div>
      <div className={styles.row}>
        <TextArea name="message" label="Mensaje" placeholder="Escribe tu mensaje aquí..." />
      </div>
      <div className={styles.row}>
        <Button type="submit" variant="primary" className={styles.button}>Enviar mensaje</Button>
      </div>
    </form>
  )
}


const TextField = ({ label, placeholder, name, type = "text" }) => (
  <div className={`${styles.textField} ${poppins.variable}`}>
    <label htmlFor={name}>{label}</label>
    <input name={name} className={styles.input} type={type} placeholder={placeholder} />
  </div>
);



const TextArea = ({ label, placeholder, name }) => (
  <div className={`${styles.textArea} ${poppins.variable}`}>
    <label htmlFor={name}>{label}</label>
    <textarea className={styles.textArea} placeholder={placeholder} rows="5" />
  </div>
);
