/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/FOrHZl4w6KG
 */
"use client"

import { Button } from "@/components/ui/button"
import { QUICK_REPLIES } from "@/assets/constants"
import { useState } from "react"
import { Separator } from "@radix-ui/react-separator"
import Link from "next/link"
import { ActionPromptProps, MessageBubbleProps, QuickReplyProps, QuickReplyType, StatusLabelProps, StatusLedProps } from "@/types"
import { TypographyP } from "./ui/typography"
import ChatIcon from "@/assets/chat.svg"
import Image from "next/image"
import CalendlyForm from "./calendly-form"
import QuotationForm from "@/components/quotation-form"
import close from "@/assets/close.svg"

function StatusLed({ active, mini }: StatusLedProps) {
  const classNames = {
    status: `flex gap-1.5 items-center`,
    statusLed: `animate-pulse  ${active ? 'bg-green' : 'bg-gray'} ${mini ? "w-2 h-2" : "w-4 h-4"} rounded-full`,
  }

  return (
    <div className={classNames.status}>
      <span className={classNames.statusLed}></span>
    </div>
  )
}


function StatusLabel({ prompt }: StatusLabelProps) {
  const classNames = {
    statusLabel: `font-light text-[14px] leading-[31px]`
  }
  return (
    <p className={classNames.statusLabel}>{prompt}</p>
  )
}

export default function Chat() {
  const [chatIsVisible, setChatIsVisible] = useState(true)
  if (!chatIsVisible) {
    const classNames = {
      closedChat: `flex items-center gap-x-2 fixed bottom-10 md:right-[10px] right-0 max-w-[400px] px-[29px] py-[11px] rounded-5 cursor-pointer rounded-[20px] animate-pulse`
    }
    return <div onClick={() => setChatIsVisible(true)} className={classNames.closedChat}><Image src={ChatIcon} width={70} height={70} alt="chat support button" /></div>
  }
  const classNames = {
    chat: ` z-[300] bg-light fixed bottom-10 right-[10px] md:w-[352px]  flex flex-col md:h-[420px] h-auto overflow-y-auto rounded-lg border`,
  }
  return (
    <div className={classNames.chat}>
      <div className="flex flex-col flex-1 border-b overflow-y-scroll">
        <div className="flex items-center p-4 space-x-4 border-b pb-0">
          <div className="flex-1">
            <h1 className="text-xl font-semibold">AvantaxGPT</h1>
            <div className="flex items-center gap-x-2">
              <StatusLed active />
              <StatusLabel prompt="Disponible ahora" />
            </div>
          </div>
          <Button size="vainilla" variant="closeChat" onClick={() => setChatIsVisible(false)}><Image alt="close icon" src={close} width={24} height={24} /></Button>
        </div>
        <div className="p-4 flex-1 flex flex-col gap-4 items-end">
          <MessageBubble><TypographyP>¡Hola! ¡Cómo puedo ayudarte hoy?</TypographyP></MessageBubble>
          <QuickReplies />
        </div>
      </div>
    </div>
  )
}

function MessageBubble({ author = "AvantaxGPT", children }: MessageBubbleProps) {
  return (
    <div className="rounded-xl bg-white dark:bg-gray-800 p-4 max-w-xs self-start">
      <div className="flex gap-2"><StatusLed active mini /><h3 className="text-sm font-semibold">{author}</h3></div>
      <Separator className="bg-light" />
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {children}
        <div />
      </div>
    </div>
  )
}

function QuickReply({ type, saveCurrentProgress }: QuickReplyProps) {
  if (type === "consulta") {
    return (
      <Button onClick={saveCurrentProgress} variant="quickReply">
        <Link href="/#contacto" className="flex items-center">Realizar consulta gratuita</Link>
      </Button>

    )
  } else if (type === "cotizacion") {
    return (
      <Button onClick={saveCurrentProgress} variant={"quickReply"}>
        Solicitar cotizacion
      </Button>
    )
  } else if (type === "cita") {
    return (
      <Button onClick={saveCurrentProgress} variant={"quickReply"}>
        Agendar cita
      </Button>
    )
  }

  return null
}

function ActionPrompt({ prompt, clearProgress }: ActionPromptProps) {
  if (prompt === "cotizacion") {
    return <>
      <MessageBubble>
        <TypographyP>Por favor, rellena este formulario para  solicitar una cotización.</TypographyP>
      </MessageBubble>
      <MessageBubble>
        <>
          <QuotationForm />
          <Button className="mx-auto block" variant="beige" onClick={clearProgress} >Regresar</Button>
        </>
      </MessageBubble>
    </>
  } else if (prompt === "cita") {
    return (
      <>
        <MessageBubble>
          <TypographyP>Por favor rellena este formulario para agendar una cita.</TypographyP>
        </MessageBubble>
        <MessageBubble>
          <>
            <CalendlyForm />
            <Button className="mx-auto block" variant="beige" onClick={clearProgress} >Regresar</Button>
          </>
        </MessageBubble>
      </>
    )
  }

  else if (prompt === "consulta") {
    return (
      <>
        <MessageBubble><><TypographyP>Puedes contactarnos a través del formulario en nuestra página de inicio.</TypographyP> <Link href="/#contacto"><span className="text-indigo">Haz click aquí para llevarte hacia él.</span></Link></></MessageBubble>
        <Button className="mx-auto block" variant="beige" onClick={clearProgress} >Regresar</Button>
      </>
    )
  }
}

function QuickReplies() {
  const [prompt, setPrompt] = useState("")

  if (prompt) {
    return <ActionPrompt prompt={prompt} clearProgress={() => setPrompt("")} />
  }
  return (
    <ul className="flex flex-col gap-y-2">
      {QUICK_REPLIES.map(reply => (
        <QuickReply key={reply.type} type={reply.type as QuickReplyType} saveCurrentProgress={() => setPrompt(reply.type)} />
      ))}
    </ul>
  )

}