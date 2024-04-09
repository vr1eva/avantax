"use client"

import Image from "next/image"
import nosotros from "@/assets/nosotros.png"
import faqCardImage from "@/assets/faqCardImage.jpg"
import Link from "next/link"
import Carousel from 'nuka-carousel';
import Ellipse from "@/assets/ellipse.svg"
import ActiveEllipse from "@/assets/activeEllipse.svg"
import { team } from "@/assets/constants"
import { Teammate } from "@/types"

export default function NosotrosPage() {
    const classNames = {
        nosotros: `flex flex-col  items-center`,
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
        hero: `relative  pt-[127px] gap-[47px] flex flex-col px-[98px]`,
        heading: `max-w-[820px] self-end text-orange text-[72px] leading-[95px] max-w-[906px]`,
        paragraph: `max-w-[698px]`,
        highlight: `text-indigo font-semibold`,
        image: `-mt-[144px]`,
        row: `flex gap-[42px]`,
        paragraphs: `flex flex-col gap-[40px]`
    }
    return (
        <div className={classNames.hero}>
            <h1 className={classNames.heading}><span className="font-bold">Conoce más </span>sobre nosotros</h1>
            <div className={classNames.row}>
                <Image width={504} height={614} src={nosotros} className={classNames.image} alt="nosotros" />
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
        faq: `relative mt-[120px] pb-[120px] w-full`,
        card: `relative z-10 bg-light  py-[43px] px-[75px] max-w-[1244px] mx-auto rounded-[16px] pb-[81px]`,
        heading: `text-[34px] leading-[51px] font-semibold`,
        actions: `flex self-end gap-[15px] items-center justify-end mt-[55px]`,
        description: `flex flex-col gap-[25px]`,
        image: `relative -mt-[64px] mx-auto w-full`,
        faqLink: `text-indigo font-medium px-[29px] py-2.5 text-[20px]`,
        primaryCta: `font-medium px-[29px] py-[10px] text-[20px] text-white rounded-[32px] bg-indigo`
    }

    return (
        <div className={classNames.faq}>
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
            <Image className={classNames.image} src={faqCardImage} height={372} width={1440} alt="machines building" />
        </div>
    )
}

function Team() {
    const classNames = {
        team: `flex flex-col items-start w-full max-w-[1206px]`,
        cards: ``,
        heading: `text-[34px] font-semibold leadig-[51px] `,
        carousel: `mt-[80px] px-[117px] xl:hidden`,
        controls: ``,
    }

    return (
        <div className={classNames.team}>
            <h2 className={classNames.heading}>Conoce a nuestro equipo</h2>
            <div className={classNames.carousel}>
                <Carousel renderBottomCenterControls={({ currentSlide, pagingDotsIndices }) => (
                    <div className={classNames.controls}>
                        {pagingDotsIndices.map(indice => (
                            <Image key={indice} src={indice === currentSlide ? ActiveEllipse : Ellipse} alt="next slide" />
                        ))}
                    </div>
                )} renderCenterLeftControls={() => (null)} renderCenterRightControls={() => (null)}>
                    {team.map(teammate => (
                        <TeamCard teammate={teammate} key={teammate.id} />
                    ))}
                </Carousel>

            </div>
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
        card: `relative list-none flex bg-light rounded-[10px] py-[44px] px-[40px]`,
        description: ``,
        cardImage: ``,
        details: ``,
        name: `text-[21px] font-semibold `,
        role: `text-indigo text-[20px]`,
        bio: ``,
        image: `absolute top-0 left-0`
    }
    const cardClassName = teammate.orientation == "left" ? classNames.leftyCard : classNames.rightyCard
    return (
        <li className={`${classNames.card} ${cardClassName}`}>
            <Image className={classNames.image} width={253} height={290} priority={true} alt={`${teammate.name}'s picture`} src={teammate.image} />
            <section className={classNames.description}>
                <div className={classNames.details}>
                    <h3 className={classNames.name}>{teammate.name}</h3>
                    <p style={{ color: teammate.color }} className={classNames.role}>{teammate.role}</p>
                </div>
                <div className={classNames.bio} dangerouslySetInnerHTML={{ __html: teammate.bio }}></div>
            </section>
        </li>
    )
}