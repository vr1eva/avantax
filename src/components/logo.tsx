"use client"

import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/logo.svg"
import logoInversed from "@/assets/logo-inversed.svg"
import { LogoProps } from "@/types"

export default function Logo({ className, inversed }: LogoProps) {
    const classNames = {
        logo: `w-[111px] h-[22px] m-0 md:w-[149px] md:h-[27px]`
    }
    return (
        <Link className={className} href="/" >
            <Image alt="Avantax Logo" src={inversed ? logoInversed : logo} className={classNames.logo} />
        </Link>
    )
}