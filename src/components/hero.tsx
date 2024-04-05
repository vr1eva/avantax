import { buttonVariants } from "@/components/ui/button"
import heroImage from "../assets/hero.jpg"
import Link from "next/link"

export default function Hero() {
    const classNames = {
        hero: `max-[600px]:h-[631px] max-[600px]:w-full max-[600px]:p-[251px 15px 0]
        max-[600px]:pt-[251px] max-[600px]:px-[15px] max-[600px]:pb-0 relative w-full h-[678px] my-0 mx-auto bg-cover bg-[right 35% bottom 45%]`,
        description: `max-[600px]:relative max-[600px]:z-10 max-[600px]:w-unset max-[600px]:top-unset max-[600px]:left-unset absolute top-[171px] left-[85px] w-[740px]`,
        heading: `max-[600px]:text-[40px] max-[600px]:leading-[51px] font-medium text-[72px] leading-[95px] text-white m-0 *:font-extrabold`,
        subheading: `max-[600px]:text-[15px] max-[600px]:leading-[22px] max-[600px]:m-[12px 0 32px] text-[22px] text-white mt-2.5 mb-[45px] max-w-[659px]`,
        cta: `max-[600px]: flex flex-col items-center *:px-`
    }

    return (
        <div className={classNames.hero} style={{
            backgroundImage: `linear-gradient(360deg, rgba(0, 0, 0, 0.59) 0%, rgba(0, 0, 0, 0) 67.72%, rgba(0, 0, 0, 0) 97.16%), url(${heroImage.src})`,
        }}>
            <div className={classNames.description}>
                <h2 className={classNames.heading}><b>Le damos propósito</b> a tus impuestos</h2>
                <p className={classNames.subheading}>Somos una consultora especializada en la implementación de proyectos de inversión pública mediante el mecanismo de Obras por Impuestos</p>
                <div className={classNames.cta}>
                    <Link href="/faq/0#oxiQuestion" className={buttonVariants({ variant: "primary" })}>¿Qué son las Obras por Impuestos?</Link>
                </div>
            </div>
        </div>
    );
};
