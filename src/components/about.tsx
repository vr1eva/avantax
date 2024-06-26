"use client"
import aboutImage from "@/assets/about.jpg"
import Link from "next/link"
import CountUp from 'react-countup'
import { KPI } from "@/assets/constants"
import { KpiProps } from "@/types"
import { buttonVariants } from "@/components/ui/button"

export default function About() {
    const classNames = {
        about: `p-[50px_15px] md:w-full md:h-[761px] md:pt-[50px] md:px-[15px] md:mb-[66px] flex flex-col items-center mb-[142px] bg-cover h-[372px] relative bg-center bg-contain bg-no-repeat mt-[52px]`,
        modal: `md:py-[24px] md:px-[20px] md:w-full md:m-0  rounded-[20px] bg-light xl:py-[50px] xl:px-[65px] w-full max-w-[1244px] mx-auto my-0 max-w-[1244px]`,
        rowContainer: `md:gap-[30px] flex gap-55 p-8 flex-col md:flex-row`,
        kpiList: `mt-[30px] md:mt-0 flex-row order-2 flex md:flex-col gap-[23px] md:order-1 md:font-semibold md:text-[22px] md:leading-[32px] md:gap-[44px] md:justify-center justify-between`,
        content: `order-1 max-w-[800px] `,
        heading: `text-[22px] leading-[32px] font-semibold xl:text-[34px] xl:leading-[51px] m-0 text-dark `,
        description: `md:text-[16px] md:leading-[26px] md:mt-5 mt-[25px] font-normal text-[18px] leading-[28px]`,
        highlight: `font-bold text-indigo`,
        cta: `flex flex-col items-center text-center w-full xl:max-w-[342px] mt-[45px] mx-auto mb-0`
    }

    return (
        <section className={classNames.about} style={{
            backgroundImage: `url(${aboutImage.src})`,
            width: '100%',
        }}>
            <div className={classNames.modal}>
                <div className={classNames.rowContainer}>
                    <div className={classNames.kpiList}>
                        {KPI.map((kpi) => (
                            <Kpi key={kpi.legend} kpi={kpi} />))}
                    </div>
                    <div className={classNames.content}>
                        <h2 className={classNames.heading}>Sobre Nosotros</h2>
                        <p className={classNames.description}>Somos un grupo de profesionales peruanos comprometidos con el cierre de brechas
                            de infraestructura en el país. <br /> <br />
                            Brindamos asesoría especializada en el mecanismo de
                            <span className={classNames.highlight}> Obras por Impuestos (OxI)</span>,
                            donde las empresas participan a través del canje de sus
                            impuestos por el financiamiento y ejecución de proyectos de construcción o mejora de infraestructura en la comunidad, como la construcción de carreteras, escuelas o
                            parques públicos.</p>
                    </div>
                </div>
                <div className={classNames.cta}>
                    <Link href="/nosotros" className={buttonVariants({ variant: "primary" })}>Conoce más sobre nosotros</Link>
                </div>
            </div>
        </section>
    )
}

function Kpi({ kpi }: KpiProps) {
    const { symbol, count, sufix, legend } = kpi
    const classNames = {
        kpi: `md:flex md:flex-col items-center xl:items-end md:w-unset md:w-[246px] justify-center`,
        estimation: `text-[40px] leading-[51px] xl:font-extrabold text-orange xl:text-7xl`,
        legend: `md:text-[15px] md:leading-[22px] font-normal text-[22px] leading-[33px] xl:text-right text-dark`
    }
    return (
        <div className={classNames.kpi}>
            <h1 className={classNames.estimation}>
                <span className="font-extrabold">{symbol}</span>
                <CountUp
                    className="font-extrabold"
                    start={0}
                    delay={0}
                    end={count}
                    duration={2.4}
                    enableScrollSpy={true} />
                <span className="font-extrabold">{sufix}</span>
                <p className={classNames.legend}>{legend}</p>
            </h1>
        </div>
    )
}