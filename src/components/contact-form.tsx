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
import { contactFormSchema, FORMSPREE_CONTACT_FORM_ID } from "@/assets/constants"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useSubmit } from "@formspree/react";
import { useForm } from 'react-hook-form';

export default function ContactForm() {
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            razon: "",
            ruc: "",
            correo: "",
            telefono: "",
            nombre: "",
            monto: "",
            mensaje: ""
        },
    })

    const {
        formState: { errors, isSubmitSuccessful, isSubmitting },
        handleSubmit,
        register,
        setError,
    } = form

    const submit = useSubmit<z.infer<typeof contactFormSchema>>(FORMSPREE_CONTACT_FORM_ID)

    if (isSubmitSuccessful) {
        return <div>
            <h2 className="md:text-[22px] md:leading-8 text-center font-semibold xl:text-[34px] xl:leading-[51px] m-0">Tu mensaje ha sido enviado correctamente!</h2>
        </div>
    }
    return (
        <>
            <h2 className="mt-[90px] md:text-[22px] md:leading-8 text-center font-semibold xl:text-[34px] xl:leading-[51px] m-0">Empecemos a trabajar juntos</h2>
            <p className="md:text-[14px] md:leading-[21px] md:mt-5 text-center font-normal text-[16px] leading-6">Ponte en contacto con nosotros y te responderemos tan rápido como podamos</p>
            <Form {...form}>
                <form onSubmit={handleSubmit(submit)} className="flex flex-col space-y-6 justify-start pt-6 px-2">
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
                                <FormLabel>Correo electrónico</FormLabel>
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
                                <FormLabel>Número de teléfono</FormLabel>
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
                                <FormLabel>Nombres y apellidos</FormLabel>
                                <FormControl>
                                    <Input required placeholder="Nombre" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="mensaje"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mensaje</FormLabel>
                                <FormControl>
                                    <Input className="py-10" required placeholder="Escribe tu mensaje aquí..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" variant="primary" className="text-base">Enviar</Button>
                </form>
            </Form>
        </>

    )
}