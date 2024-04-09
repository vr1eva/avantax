import Logo from "@/components/logo"
import { CONTACT_ACTIONS, SOCIAL_LINKS } from "@/assets/constants"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { CONTACT_ITEMS } from "@/assets/constants"
import Link from "next/link"

export default function Footer() {
    const classNames = {
        footer: `py-8 bg-[#222222] px-[52px] flex gap-[174px] md:flex-col xl:flex-row items-start w-full mx-auto`,
        column: `flex flex-col gap-5 pt-[26px]`
    }

    return <>
        <div className={classNames.footer}>
            <div className={classNames.column}>
                <Logo inversed />
                <Separator className="bg-[#D8CDBA]" />
                <Socials />
            </div>
            <ContactItems />
            <ContactActions />
        </div >
        <Separator className="px-[52px] bg-[#3E3E3E]" />
        <CopyrightNotice />
    </>
}

function Socials() {
    return (
        <ul className="flex gap-8 items-center">
            {SOCIAL_LINKS.map(link => (
                <li key={link.alt}>
                    <Image src={link.icon} alt={link.alt} />
                </li>
            ))}
        </ul>
    )
}

function ContactItems() {
    const classNames = {
        title: `font-semibold text-[18px] leading-[28px] text-beige`,
        description: `text-beige leading-[35px] text-[18px]`,
        items: `gap-[7px] flex flex-col flex-wrap gap-x-[55px] h-[152px]`,
        item: `min-h-[65px] max-w-[300px]`

    }
    return <ul className={classNames.items}>
        {CONTACT_ITEMS.map(item => (
            <li className={classNames.item} key={item.value}>
                <h5 className={classNames.title}>{item.title}</h5>
                <p className={classNames.description}>{item.value}</p>
            </li>
        ))}
    </ul>
}

function ContactActions() {
    const classNames = {
        link: `text-beige font-semibold text-[21px]`
    }
    return (
        <ul className="ml-auto flex flex-col gap-[26px]">
            {CONTACT_ACTIONS.map(action => (
                <Link className={classNames.link} key={action.url} href={action.url}>{action.label}</Link>
            ))}
        </ul>
    )
}

function CopyrightNotice() {
    return (
        <p className="text-center pt-[35px] pb-[32px] text-[18px] bg-[#222222] text-beige">Avantax © Todos los derechos reservados 2023</p>
    )
}