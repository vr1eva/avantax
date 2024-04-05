import Logo from "@/components/logo"
import { CONTACT_ACTIONS, SOCIAL_LINKS } from "@/assets/constants"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { CONTACT_ITEMS } from "@/assets/constants"
import Link from "next/link"

export default function Footer() {
    const classNames = {
        logo: ``,
        footer: `py-8 bg-[#222222] px-[52px] flex gap-[174px] md:flex-col xl:flex-row items-start max-w-[1440px]  mx-auto`,
        column: `flex flex-col gap-5 pt-[26px]`
    }
    return <div className={classNames.footer}>
        <div className={classNames.column}>
            <Logo inversed />
            <Separator className="bg-[#D8CDBA]" />
            <Socials />
        </div>
        <ContactItems />
        <ContactActions />
    </div >
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
        items: `gap-[7px] flex flex-col h-[144px] flex-wrap gap-x-[55px]`,
        item: `min-h-[55px] max-w-[300px]`

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
        link: `text-beige`
    }
    return (
        <ul className="flex flex-col gap-[26px]">
            {CONTACT_ACTIONS.map(action => (
                <Link className={classNames.link} key={action.url} href={action.url}>{action.label}</Link>
            ))}
        </ul>
    )
}