import { COMPANY_BENEFITS, BENEFITS } from "@/assets/constants"
import { BenefitCardProps, BenefitIconKey } from "@/types"
import Image from "next/image"
import { benefitIcons } from "@/assets/constants"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Benefits() {
    const classNames = {
        benefits: `p-[52px 0 120px]`
    }
    return (
        <section className={classNames.benefits} id="beneficios">
            <BenefitsList />
            <CompanyBenefitsList />
            <CallToAction />
        </section>
    )
}

function BenefitsList() {
    const classNames = {
        benefit: ` px-4`,
        heading: `text-[22px] leading-[32px] md:text-[34px] md:leading-[51px] font-semibold text-center pt-20 max-w-[1000px] mx-auto px-4`,
        cards: `overflow-x-auto pt-[55px] flex flex-row flex-nowrap gap-5 items-center md:justify-center w-full `,
        image: `mb-5`
    }
    const heading = "¿Qué beneficios brindan las Obras por Impuestos al país?"
    return (
        <div className={classNames.benefit} id="beneficios">
            <h2 className={classNames.heading}>{heading}</h2>
            <div className={classNames.cards}>
                {BENEFITS.map(item => (
                    <BenefitCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                    >
                        <Image
                            className={classNames.image}
                            alt={"Benefit" + item.title}
                            src={benefitIcons[item.icon as BenefitIconKey]}
                            width={70}
                            height={70}
                        />
                    </BenefitCard>
                ))}
            </div>
        </div>
    )
}

function BenefitCard({ title, description, children }: BenefitCardProps) {
    const classNames = {
        card: `p-[30px_21px_78px] w-[296px] bg-light rounded-[20px] max-h-[324px] max-[600px]:w-[240px] max-[600px]:py-[26px] max-[600px]:px-6 max-[600px]:shrink-0`,
        title: `text-dark font-semibold text-[21px] leading-8 m-[20px 0 0] max-[600px]:text-[18px] max-[600px]:leading-[21px] max-[600px]:mt-3.5`,
        description: `text-dark font-normal text-[16px] leading-6 mt-[22px] max-[600px]:text-[14px] max-[600px]:leading-[21px] max-[600px]:mt-1.5`
    }
    return (
        <div className={classNames.card}>
            {children}
            <h3 className={classNames.title}>{title}</h3>
            <p className={classNames.description}>{description}</p>
        </div>
    )
}

function CompanyBenefitsList() {
    const classNames = {
        companyBenefits: `px-4`,
        heading: `text-[22px] leading-[32px] md:text-[34px] md:leading-[51px] font-semibold text-center pt-[70px] max-w-[860px] mx-auto px-4`,
        cards: `overflow-x-auto  pt-[55px] flex flex-row  gap-5 md:justify-center items-stretch`,
        image: `mb-5`
    }
    const heading = "¿Qué beneficios brindan las Obras por Impuestos para las empresas que las financian?"
    return (
        <div className={classNames.companyBenefits}>
            <h2 className={classNames.heading}>{heading}</h2>
            <div className={classNames.cards}>
                {COMPANY_BENEFITS.map(item => (
                    <BenefitCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                    >
                        <Image
                            className={classNames.image}
                            alt={"Benefit" + item.title}
                            src={benefitIcons[item.icon as BenefitIconKey]}
                            width={70}
                            height={70}
                        />
                    </BenefitCard>
                ))}
            </div>
        </div>
    )
}

function CallToAction() {
    const classNames = {
        cta: `mt-[70px] pb-[60px] flex justify-center text-center px-[15px]`,
        button: `font-normal`
    }
    const buttonName = "Comienza a invertir"
    return (
        <div className={classNames.cta}>
            <Link href="/#contacto" className={cn(classNames.button, buttonVariants({ variant: "primary" }))}>
                {buttonName}
            </Link>
        </div>
    )
}