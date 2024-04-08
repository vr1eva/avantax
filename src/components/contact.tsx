
import { Button } from "@/components/ui/button"
import { TextAreaProps, TextFieldProps } from "@/types"

export default function Contact() {
    const classNames = {
        contact: ` flex flex-col mt-[125px] mx-auto mb-[175px] w-full max-w-[878px]`,
        contactModal: `md:py-6 md:px-5 rounded-[30px] w-[878px] bg-light xl:p-[65px]`,
        heading: `md:text-[22px] md:leading-8 text-center font-semibold xl:text-[34px] xl:leading-[51px] m-0`,
        description: `md:text-[14px] md:leading-[21px] md:mt-5 text-center font-normal text-[16px] leading-6`,
    }

    return (
        <div className={classNames.contact} id="contacto">
            <div className={classNames.contactModal}>
                <h2 className={classNames.heading}>Empecemos a trabajar juntos</h2>
                <p className={classNames.description}>Ponte en contacto con nosotros y te responderemos tan rápido como podamos</p>
                <Form />
            </div>
        </div>
    )
}

function Form() {
    const classNames = {
        form: `md:mt-8 mt-[35px] flex flex-col gap-7`,
        row: `md:flex-col xl:flex-row md:gap-[18px] w-full flex gap-3`,
        button: `mt-[28px] w-full`
    }

    return (
        <form className={classNames.form} id="contacto" name="contact" method="POST" data-netlify="true" action="/success">
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="subject"
                value="Mensaje nuevo en avantax.pe" />
            <div className={classNames.row}>
                <TextField type="number" name="razonSocial" label="Razón social" placeholder="Razón social" />
                <TextField type="number" name="ruc" label="RUC" placeholder="RUC" />
            </div>
            <div className={classNames.row}>
                <TextField name="email" label="Correo electrónico" placeholder="tunombre@correo.com" />
            </div>
            <div className={classNames.row}>
                <TextField name="tel" type="tel" label="Número de teléfono" placeholder="+51 999 999 999" />
            </div>
            <div className={classNames.row}>
                <TextField name="company" label="Empresa" placeholder="El nombre de la empresa" />
                <TextField name="role" label="Puesto" placeholder="Tu puesto" />
            </div>
            <div className={classNames.row}>
                <TextArea name="message" label="Mensaje" placeholder="Escribe tu mensaje aquí..." />
            </div>
            <div className={classNames.row}>
                <Button type="submit" variant="primary" className={classNames.button}>Enviar mensaje</Button>
            </div>
        </form>
    )
}

const TextField = ({ label, placeholder, name, type = "text" }: TextFieldProps) => {
    const classNames = {
        textField: `flex flex-col flex-1`,
        label: `text-[16px] leading-6 mb-2.5 text-dark`,
        input: `rounded-[29px] py-2.5 px-6 text-[18px] leading-7 border-0 placeholder:text-[#6C6C6C]`
    }
    return (
        <div className={classNames.textField}>
            <label className={classNames.label} htmlFor={name}>{label}</label>
            <input required name={name} className={classNames.input} type={type} placeholder={placeholder} />
        </div>
    );
}

const TextArea = ({ label, placeholder, name }: TextAreaProps) => {
    const classNames = {
        textArea: `flex flex-col flex-1`,
        label: `text-[16px] leading-6 mb-2.5 text-dark`,
        textInput: `rounded-[29px] py-2.5 px-6 text-[18px] leading-7 border-0 placeholder:text-[#6C6C6C]`
    }
    return (
        <div className={classNames.textArea}>
            <label htmlFor={name}>{label}</label>
            <textarea className={classNames.textInput} placeholder={placeholder} rows={5} />
        </div>
    );
}
