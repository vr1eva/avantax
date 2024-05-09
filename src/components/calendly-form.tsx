"use client"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { CALENDLY_EVENT_URL, calendlyFormSchema } from "@/assets/constants"
import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function CalendlyForm() {
    const [calendlyUrl, setCalendlyUrl] = useState("")
    const form = useForm<z.infer<typeof calendlyFormSchema>>({
        resolver: zodResolver(calendlyFormSchema),
        defaultValues: {
            razon: "",
            ruc: "",
            correo: "",
            telefono: "",
            nombre: "",
        },
    })

    function onSubmit(values: z.infer<typeof calendlyFormSchema>) {
        setCalendlyUrl(`${CALENDLY_EVENT_URL}?name=${values.nombre}&email=${values.correo}&a2=${values.razon}&a3=${values.ruc}`)
    }
    return (
        <>
            {!calendlyUrl ? <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-4 justify-start w-full">
                    <FormField
                        control={form.control}
                        name="razon"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Razón social</FormLabel>
                                <FormControl>
                                    <Input placeholder="Razón social" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="ruc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>RUC</FormLabel>
                                <FormControl>
                                    <Input placeholder="RUC" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="correo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Correo</FormLabel>
                                <FormControl>
                                    <Input placeholder="Correo" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="telefono"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Teléfono</FormLabel>
                                <FormControl>
                                    <Input placeholder="Teléfono" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="nombre"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombres y apellidos</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nombres y apellidos" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" variant="primary" className="text-base">Enviar</Button>
                </form>
            </Form> : <Link href={calendlyUrl} className={cn("text-indigo", buttonVariants({ variant: "primary" }))} target="_blank">Confirmar reserva</Link>}
        </>
    )
}