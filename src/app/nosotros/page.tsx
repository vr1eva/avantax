"use client"

import Image from "next/image"

import faqCardImage from "@/assets/faqCardImage.jpg"
import Link from "next/link"
import Ellipse from "@/assets/ellipse.svg"
import ActiveEllipse from "@/assets/activeEllipse.svg"
import { NOSOTROS_IMAGES, team } from "@/assets/constants"
import { Teammate } from "@/types"

export default function NosotrosPage() {
    const classNames = {
        nosotros: `flex flex-col items-center`,
    }
    return (
        <div className={classNames.nosotros}>
            <Hero />
            <Faq />
            <Team />
        </div>
    )
}

function Hero() {
    const classNames = {
        hero: `relative py-[40px] px-[15px] xl:pt-[127px] gap-[47px] flex flex-col xl:px-[98px]`,
        heading: `max-w-[820px] self-end text-orange xl:text-[72px] xl:leading-[95px] text-[40px] leading-[51px]`,
        paragraph: `max-w-[698px]`,
        highlight: `text-indigo font-semibold`,
        images: `flex flew-row md:flex-col md:h-[614px] w-full md:w-[504px] md:flex-wrap h-[230px] gap-x-[15px] overflow-x-hidden justify-center`,
        image: `shrink-0  mt-0 md:last:mt-[158px]`,
        row: `flex gap-[42px] flex-col xl:flex-row`,
        paragraphs: `flex flex-col gap-[40px]`
    }
    return (
        <div className={classNames.hero}>
            <h1 className={classNames.heading}><span className="font-bold">Conoce más </span>sobre nosotros</h1>
            <div className={classNames.row}>
                <div className={classNames.images}>
                    {NOSOTROS_IMAGES.map((image, index) => (
                        <Image className={classNames.image} key={index} width={230} height={188} src={image} alt="nosotros" />
                    ))}
                </div>
                <div className={classNames.paragraphs}>
                    <p className={classNames.paragraph}>Somos un grupo de profesionales peruanos comprometidos con el cierre de brechas de infraestructura en el país. Brindamos asesoría especializada en el mecanismo de <span className={classNames.highlight}>Obras por Impuestos (OxI)</span>, donde las empresas participan a través del canje del pago de sus impuestos por el financiamiento y ejecución de proyectos de construcción o mejora de infraestructura en la comunidad, como la construcción de carreteras, escuelas o parques públicos.</p>
                    <p className={classNames.paragraph}>A lo largo de nuestras trayectorias profesionales hemos articulado un portafolio de <span className={classNames.highlight}>más de 30 proyectos</span> de diversos sectores como salud, educación, transporte, seguridad ciudadana y electrificación, cuyo monto total de inversión supera los <span className={classNames.highlight}>250 millones de soles</span>.</p>
                </div>
            </div>
        </div>
    )
}


function Faq() {
    const classNames = {
        faq: `relative mt-[66px] xl:mt-[120px] pb-[120px] w-full bg-[rgb(232, 196, 135)]`,
        card: `mx-[15px] relative -mt-2 z-10 bg-light xl:p-[43px_75px_81px] max-w-[1244px] mx-auto rounded-[16px] p-[24px_20px]`,
        heading: `text-[22px] leading-[32px] xl:text-[34px] xl:leading-[51px] font-semibold`,
        actions: `flex flex-col xl:flex-row self-end gap-[15px] items-center justify-end mt-[55px]`,
        description: `flex flex-col gap-[25px]`,
        image: `relative mx-auto w-full`,
        faqLink: `text-indigo font-medium px-[29px] py-2.5 text-[20px]`,
        primaryCta: `font-medium px-[29px] py-[10px] text-[20px] text-white rounded-[32px] bg-indigo`
    }

    return (
        <div className={classNames.faq}>
            <Image className={classNames.image} src={faqCardImage} height={372} width={1440} alt="machines building" />
            <div className={classNames.card}>
                <div className={classNames.description}>
                    <h2 className={classNames.heading}>¿Cómo es el proceso de Obras por Impuestos?</h2>
                    <p>El proceso de Obras por Impuestos se da cuando la empresa destina parte del pago de su impuesto a la renta al financiamiento y ejecución de un determinado proyecto de prioridad pública. Una vez finalizada la ejecución o avance del proyecto el Tesoro Público <strong>devuelve a la empresa el monto invertido a través del CIPRL</strong> (Certificado de Inversión Pública Regional y Local) que podrá ser utilizado para los pagos a cuenta y de regularización del impuesto a la renta.</p>
                </div>

                <div className={classNames.actions}>
                    <Link className={classNames.faqLink} href="/faq" >Ir a preguntas frecuentes</Link>
                    <Link className={classNames.primaryCta} href="/faq" >Contacta con nosotros</Link>
                </div>
            </div>

        </div>
    )
}

function Team() {
    const classNames = {
        team: `flex flex-col items-start w-full max-w-[1206px] pb-[204px] `,
        cards: `mt-[37px] flex flex-col gap-[104px] pt-[80px] px-[15px]`,
        heading: ` text-[21px] leading-[31px] xl:text-[34px] font-semibold xl:leading-[51px] mx-auto`,
        carousel: `mt-[80px] px-[117px] xl:hidden`,
        controls: ``,
    }

    return (
        <div className={classNames.team}>
            <h2 className={classNames.heading}>Conoce a nuestro equipo</h2>
            <div className={classNames.cards}>
                {team.map(teammate => (
                    <TeamCard teammate={teammate} key={teammate.id} />
                ))}
            </div>
        </div>
    )
}


function TeamCard({ teammate }: { teammate: Teammate }) {
    const classNames = {
        leftyCard: ``,
        rightyCard: ``,
        card: `relative list-none flex  bg-light rounded-[10px] xl:py-[44px] xl:px-[40px] px-[20px] py-[24px]`,
        description: `xl:pl-[240px]`,
        cardImage: ``,
        details: `pl-[120px] min-w-[280px] min-h-[79px]`,
        name: `text-[21px] font-semibold `,
        role: `text-indigo xl:text-[20px] text-[]`,
        bio: `mt-2`,
        image: `w-[131px] h-[165px] absolute -top-[66px] left-0`
    }
    const cardClassName = teammate.orientation == "left" ? classNames.leftyCard : classNames.rightyCard
    return (
        <li className={`${classNames.card} ${cardClassName}`}>
            <Image className={classNames.image} width={253} height={290} priority={true} alt={`${teammate.name}'s picture`} src={teammate.image} />
            <div className={classNames.description}>
                <div className={classNames.details}>
                    <h3 className={classNames.name}>{teammate.name}</h3>
                    <p style={{ color: teammate.color }} className={classNames.role}>{teammate.role}</p>
                </div>
                <div className={classNames.bio} dangerouslySetInnerHTML={{ __html: teammate.bio }}></div>
            </div>
        </li>
    )
}