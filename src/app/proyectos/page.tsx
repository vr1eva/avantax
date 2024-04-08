import ProjectsTable from "@/components/projects-table";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Avantax / Proyectos",
    description: "Solución de impuestos",
};

export default async function Proyectos() {
    const classNames = {
        proyectos: `w-full max-w-[1244px] mx-auto max-w-[1244px] pt-[71px] px-[15px] pb-0 max-[600px]:pt-[40px] max-[600px]:pr-[15px] max-[600px]:pb-[72px] pb-[99px]`,
        heading: `font-semibold text-[34px] text-green leading-[51px] text-dark m-0 max-[600px]:text-[40px] max-[600px]:leading-[51px]`,
        note: `m-[35px 0 0]`,
        cta: `gap-[47px] p-[42px 0] flex items-center flex-col max-w-[1221px] m-[82px auto 0] max-[600px]:mt-[68px] max-[600px]:p-[42px 15px]`,
        ctaHeading: `m-0 font-semibold text-[34px] leading-[51px] max-[600px]:text-[22px] max-[600px]:leading `,
        ctaButton: `m-[47px auto 0]`,
    }

    return (
        <div className={classNames.proyectos}>
            <h2 className={classNames.heading}><b>Cartera de </b> proyectos</h2>
            <p className={classNames.note}>Aquí encontrarás los proyectos de todas las entidades públicas a nivel nacional viabilizados a través de obras por impuestos y listos para su ejecución.</p>
            <ProjectsTable />
            <div className={classNames.cta}>
                <h2 className={classNames.ctaHeading}>¿No encuentras
                    proyectos de tu interés?</h2>
                <Link className={`${classNames.ctaButton} ${buttonVariants({ variant: "primary" })}`} href="/faq/7#highlightedQuestion">Haz click aquí</Link>
            </div>
        </div>
    )
}
