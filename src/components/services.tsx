"use client"
import { SERVICE_STAGES, serviceIcons } from "@/assets/constants"
import Carousel from 'nuka-carousel';
import { ColorKey, ServiceCardProps, ServiceIconKey } from "@/types";
import { Button } from "@/components/ui/button"
import Image from "next/image"
import arrowLeft from "@/assets/arrowLeft.svg"
import arrowRight from "@/assets/arrowRight.svg"
import Ellipse from "../assets/ellipse.svg"
import ActiveEllipse from "../assets/activeEllipse.svg"
import { colors } from "@/assets/constants"
import { useDeviceSize } from "@/lib/hooks"

export default function Services() {
    const [width, height] = useDeviceSize()

    const classNames = {
        services: `flex-col md:gap-[44px] md:px-[15px] md:flex-row flex gap-[42px] max-w-[1306px] w-full my-0 mx-auto overflow-y-hidden p-[600px_15px_0] md:pt-[292px]`,
        content: `w-full md:w-[437px]`,
        heading: `md:text-[22px] md:leading-8 font-semibold text-[34px] leading-[51px] m-0`,
        description: `md:text-[16px] md:leading-[26px] md:mt-5 md:w-auto text-[18px] leading-7 mt-[35px] md:w-[437px] xl:text-[18px] xl:leading-[28px] w-full`,
        highlight: `md:font-bold md:text-[16px] md:leading-[26px] text-indigo font-extrabold`,
        cards: ``,
        controls: `md:hidden flex w-[55px] absolute top-[360px] -left-[13px] cursor-pointer`,
        dotControls: `md:flex md:gap-2 md:-ml-[28px] md:absolute md:-bottom-[28px] hidden`
    }

    return (
        <section className={classNames.services}>
            <div className={classNames.content} >
                <h2 className={classNames.heading}>Nuestros servicios</h2>
                <p className={classNames.description}>Creemos que las empresas que apuestan
                    por Obras por Impuestos no deben distraerse de sus actividades cotidianas relacionadas
                    a su <span className={classNames.highlight}>core business</span>, por ello, hemos desarrollado nuestra consultoría en la modalidad <span className={classNames.highlight}>Llave
                        en Mano</span> para encargarnos del desarrollo
                    de cada una de las cinco fases del mecanismo, culminando el proceso exitosamente
                    con la entrega del CIPRL. </p>
            </div>
            <div className={classNames.cards}>
                <Carousel adaptiveHeight={true} renderBottomCenterControls={({ nextSlide, previousSlide, pagingDotsIndices, currentSlide }) => {
                    return (
                        <>
                            <div className={classNames.controls}>
                                <Button variant="light" onClick={previousSlide}><Image src={arrowLeft} alt="boton para girar a la izquierda" /> </Button>
                                <Button variant="light" onClick={nextSlide}><Image src={arrowRight} alt="boton para girar a la derecha" /></Button>
                            </div>
                            <div className={classNames.dotControls}>
                                {pagingDotsIndices.map(indice => (
                                    <Image alt="ellipsis" key={indice} src={indice === currentSlide ? ActiveEllipse : Ellipse} />))
                                }
                            </div>
                        </>
                    )
                }} cellSpacing={20} disableEdgeSwiping slidesToShow={width > 836 ? 3.2 : 1.2} renderCenterLeftControls={() => (null)} renderCenterRightControls={() => (null)} >
                    {SERVICE_STAGES.slice(0).concat(SERVICE_STAGES.slice(0, 0)).map(({ title, items, color, icon, background }) => (
                        <ServiceCard key={title} title={title} items={items} color={color} icon={serviceIcons[icon as ServiceIconKey]} background={background} />
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

function ServiceCard({ title, items, color, background, icon }: ServiceCardProps) {
    const classNames = {
        card: `md:w-full cursor-grab pt-[28px] px-[22px] pb-[84px] w-[350px] h-[357px] overflow-hidden rounded-[20px] text-white relative transition ease-in-out delay-500`,
        cardHeading: `font-semibold text-[21px] leading-8 m-0`,
        cardItems: `mt-[13px] px-[22px] list-disc`,
        cardItem: `font-normal text-[16px] leading-6`,
        cardImage: `absolute right-6 bottom-6 `
    }
    return (
        <div className={classNames.card} style={{ color: color, background: colors[background as ColorKey] }}>
            <h3 className={classNames.cardHeading}>{title}</h3>
            <ul className={classNames.cardItems}>
                {items.map(item => (
                    <li className={classNames.cardItem} key={item}>{item}</li>
                ))}</ul>
            <Image priority={true} alt="service" key={title} src={icon} className={classNames.cardImage} />
        </div>
    )
}