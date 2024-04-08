import { TypographyProp } from "@/types"

export function TypographyH1({ children }: TypographyProp) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {children}
        </h1>
    )
}

export function TypographyH2({ children }: TypographyProp) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children}
        </h2>
    )
}

export function TypographyH3({ children }: TypographyProp) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    )
}


export function TypographyH4({ children }: TypographyProp) {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {children}
        </h4>
    )
}

export function TypographyP({ children }: TypographyProp) {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {children}
        </p>
    )
}

export function TypographyBlockquote({ children }: TypographyProp) {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            {children}
        </blockquote>
    )
}

export function TypographyMuted({ children }: TypographyProp) {
    return (
        <p className="text-sm text-muted-foreground">{children}</p>
    )
}