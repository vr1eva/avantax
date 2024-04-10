
"use client"
import ContactForm from "@/components/contact-form"
export default function Contact() {

    const classNames = {
        contact: ` flex flex-col mt-[125px] mx-auto mb-[175px] w-full md:max-w-[878px]`,
        contactModal: `md:py-6 md:px-5 rounded-[30px] max-w-[878px] bg-light xl:p-[65px]`,
        heading: `md:text-[22px] md:leading-8 text-center font-semibold xl:text-[34px] xl:leading-[51px] m-0`,
        description: `md:text-[14px] md:leading-[21px] md:mt-5 text-center font-normal text-[16px] leading-6`,
        successNote: `md:text-[22px] md:leading-8 text-center font-semibold xl:text-[34px] xl:leading-[51px] m-0`
    }

    return (
        <div className={classNames.contact} id="contacto">
            <div className={classNames.contactModal}>
                <ContactForm />
            </div>
        </div>
    )
}


