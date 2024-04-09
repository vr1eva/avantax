"use client"

import { useState } from "react"
import Image from 'next/image'
import Link from "next/link"
import { LINKS } from "@/assets/constants"
import menuExpanded from "@/assets/menuExpanded.svg"
import menu from "@/assets/menu.svg"
import { buttonVariants } from "@/components/ui/button"
import Logo from "@/components/logo"
import Menu from "@/components/menu"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const classNames = {
        nav: `absolute right-0 bg-white w-full top-[57px] text-right p-[45px_35px] flex flex-col gap-[30px]`,
        link: `text-[20px] leading-[32px] flex flex-col items-end`,
        linkButton: `font-normal text-[20px] leading-[30px] py-[10px] px-[29px]`,
        activeLink: `font-medium text-[20px] leading-[30px] text-indigo`,
        social: `flex gap-[47px] w-[178px] items-center mt-[278px] md:hidden`,
        hamburgerMenu: `md:hidden flex cursor-pointer`
    }

    return (
        <>
            <Menu className="hidden md:block" />
            <Image className={classNames.hamburgerMenu} onClick={() => setMenuOpen(!menuOpen)} alt="open menu" src={menuOpen ? menuExpanded : menu} width={16} height={16} />
            {menuOpen ?
                <nav className={classNames.nav}>
                    {LINKS.map((link, index, array) => (
                        <Link onClick={() => setMenuOpen(false)} passHref className={`${classNames.link} ${index === array.length - 1 ? buttonVariants({ variant: "primary" }) : ""} `} key={link.name} href={link.path}  >
                            {link.name}
                        </Link>
                    ))}

                </nav >
                : null}
        </>
    )
}

export default function Header() {
    const classNames = {
        header: `justify-between bg-white relative z-[200] shadow-md px-[24px] py-[18px] flex md:px-[55px] mx-auto w-full items-center sticky top-0`
    }
    return (
        <header className={classNames.header}>
            <Logo />
            <Navbar />
        </header>
    );
}
