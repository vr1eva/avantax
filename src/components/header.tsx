"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { LINKS, HIGHLIGHTED_PATH } from "@/assets/constants"
import menuExpanded from "@/assets/menuExpanded.svg"
import menu from "@/assets/menu.svg"
import linkedinGold from "@/assets/linkedin-gold.svg"
import instagramGold from "@/assets/instagram-gold.svg"
import twitterGold from "@/assets/twitter-gold.svg"
import { buttonVariants } from "@/components/ui/button"
import Logo from "@/components/logo"

function Navbar() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    const classNames = {
        nav: `hidden md:relative absolute md:flex md:ml-auto md:gap-10 max-w-[1440px]`,
        expandedNav: `items-center text-right flex absolute hidden top-[90px] right-0 flex-col z-1 py-[45px] px-[35px] bg-white w-full z-10 items-end`,
        menu: `flex md:hw-full md:hidden cursor-pointer md:ml-auto md:order-2`,
        link: `text-[20px] leading-[32px] *:p-0 last-of-type:h-[50px] flex items-center`,
        linkButton: `font-normal text-[20px] leading-[30px] py-[10px] px-[29px]`,
        activeLink: `font-medium text-[20px] leading-[30px]`,
        social: `flex gap-[47px] w-[178px] items-center mt-[278px] md:hidden`
    }

    return (
        <>
            <Image alt="open menu" className={classNames.menu} src={menuOpen ? menuExpanded : menu} width={30} height={18} />
            <div className={`${classNames.nav} ${menuOpen ? classNames.expandedNav : null}`}>
                {LINKS.map((link) => {
                    return (
                        <Link passHref className={`${classNames.link}  ${buttonVariants({ variant: link.path == HIGHLIGHTED_PATH ? "primary" : "default" })}`} key={link.name} href={link.path}  >
                            {link.name}
                        </Link>)
                })}
                <div className={classNames.social}>
                    <Link href="https://www.linkedin.com/company/avantax-peru/?viewAsMember=true"><Image alt="linkedin" width={28} height={28} src={linkedinGold} /> </Link>
                    <Link href="https://twitter.com/avantax_peru"><Image alt="twitter" width={28} height={28} src={twitterGold} /></Link>
                    <Link href="https://www.instagram.com/avantax.pe/"><Image alt="instagram" width={28} height={28} src={instagramGold} /></Link>
                </div>
            </div>
        </>
    )
}



export default function Header() {
    const classNames = {
        header: `bg-white relative z-[200] shadow-md px-[24px] py-[18px] flex md:px-[55px] mx-auto w-full items-center sticky top-0`
    }
    return (
        <header className={classNames.header}>
            <Logo />
            <Navbar />
        </header>
    );
}
