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
import { quotationFormSchema, FORMSPREE_QUOTATION_FORM_ID } from "@/assets/constants"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useSubmit } from "@formspree/react";
import { useForm } from 'react-hook-form';

export default function QuotationForm() {
    const form = useForm<z.infer<typeof quotationFormSchema>>({
        resolver: zodResolver(quotationFormSchema),
        defaultValues: {
            razon: "",
            ruc: "",
            correo: "",
            telefono: "",
            nombre: "",
            monto: ""
        },
    })

    const {
        formState: { errors, isSubmitSuccessful, isSubmitting },
        handleSubmit,
        register,
        setError,
    } = form

    const submit = useSubmit<z.infer<typeof quotationFormSchema>>(FORMSPREE_QUOTATION_FORM_ID)

    if (isSubmitSuccessful) {
        return <div>
            <h2>Tu mensaje ha sido enviado correctamente!</h2>
        </div>
    }
    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(submit)} className="flex flex-col space-y-8 justify-start">
                <FormField
                    control={form.control}
                    name="razon"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Razón social</FormLabel>
                            <FormControl>
                                <Input required placeholder="Razón social" {...field} />
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
                                <Input required placeholder="RUC" {...field} />
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
                                <Input required placeholder="ejemplo@correo.com" {...field} />
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
                                <Input required type="tel" placeholder="+51 921 788 942" {...field} />
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
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                                <Input required placeholder="Nombre" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="monto"
                    render={({ field }) => (

                        <FormItem>
                            <FormLabel>Monto interesado en financiar</FormLabel>
                            <FormControl>
                                <Input required placeholder="Monto en S/." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" variant="primary" className="text-base">Enviar</Button>
            </form>
        </Form>
    )
}