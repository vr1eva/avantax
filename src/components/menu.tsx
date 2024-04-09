"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Inicio",
        href: "/",
        description:
            "Home.",
    },
    {
        title: "Beneficios",
        href: "/#beneficios",
        description:
            "Conoce los beneficios que tiene Avantax para tu empresa.",
    },
    {
        title: "Nosotros",
        href: "/nosotros",
        description:
            "Conoce el equipo que hace posible Avantax.",
    },
    {
        title: "Proyectos",
        href: "/proyectos",
        description: "Inspecciona los proyectos en los que hemos trabajado.",
    },
    {
        title: "FAQs",
        href: "/faq",
        description:
            "Preguntas frecuentes.",
    },
]

export default function Menu({ className }: { className: string }) {
    return (
        <NavigationMenu className={className}>
            <NavigationMenuList>
                {components.map(item => (
                    <NavigationMenuItem key={item.title}>
                        <Link href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {item.title}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"