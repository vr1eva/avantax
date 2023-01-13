import styles from "./Contact.module.scss"
import Button from "./Button"

export default function() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.heading}>Empecemos a trabajar juntos</h2>
      <p className={styles.description}>Ponte en contacto con nosotros y te responderemos tan rápido como podamos</p>
      <Form />
    </div>
  )
}

function handleSubmit() {
  //nothing
}

function Form() {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <TextField name="name" label="Nombre" placeholder="Nombre" />
        <TextField name="surname" label="Apellido" placeholder="Tu apellido" />
      </div>
      <div className={styles.row}>
        <TextField name="email" label="Correo" placeholder="Correo" />
      </div>
      <TextField name="email" label="Correo electrónico" placeholder="tunombre@corre.com" />
      <div className={styles.row}>
        <TextField name="tel" type="tel" label="Número de teléfono" placeholder="+51 999 999 999" />
      </div>
      <div className={styles.row}>
        <TextField name="company" label="Empresa" placeholder="El nombre de la empresa" />
      </div>
      <div className={styles.row}>
        <TextField name="role" label="Puesto" placeholder="Tu puesto" />
      </div>
      <div className={styles.row}>
        <TextArea name="message" label="Mensaje" placeholder="Escribe tu mensaje aquí..." />
      </div>
      <div className={styles.row}>
        <Button type="submit" variant="primary" className={styles.button} >Enviar mensaje</Button>
      </div>
    </form>
  )
}


const TextField = ({ label, placeholder, name, type = "text" }) => (
  <div className={styles.textField}>
    <label htmlFor={name}>{label}</label>
    <input type={type} placeholder={placeholder} />
  </div>
);



const TextArea = ({ label, placeholder, name }) => (
  <div className={styles.textArea}>
    <label htmlFor={name}>{label}</label>
    <textarea placeholder={placeholder} rows="5" />
  </div>
);
