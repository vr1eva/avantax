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
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export default function CalendlyForm() {
    const [calendlyUrl, setCalendlyUrl] = useState("")
    const form = useForm<z.infer<typeof calendlyFormSchema>>({
        resolver: zodResolver(calendlyFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            razon: "",
            ruc: ""

        },
    })

    function onSubmit(values: z.infer<typeof calendlyFormSchema>) {
        setCalendlyUrl(`${CALENDLY_EVENT_URL}?first_name=${values.firstName}&last_name=${values.lastName}&email=${values.email}&razon=${values.razon}&ruc=${values.ruc}`)
    }
    return (
        <>
            {!calendlyUrl ? <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8 justify-start">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nombre" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Apellido</FormLabel>
                                <FormControl>
                                    <Input placeholder="Apellido" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
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

                    <Button type="submit" variant="primary" className="text-base">Enviar</Button>
                </form>
            </Form> : <Link href={calendlyUrl} className="text-indigo" target="_blank">Confirmar reserva</Link>}
        </>
    )
}