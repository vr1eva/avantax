"use client"

import Image from "next/image"
import Link from "next/link"
import expanded from "@/assets/expanded.svg"
import notExpanded from "@/assets/notExpanded.svg"
import { useReducer, Reducer } from "react"
import { FAQS } from "@/assets/constants"
import { Faq, ReducerAction, ReducerActionType } from "@/types"
import { Separator } from "@/components/ui/separator"

const classNames = {
    faqList: `w-full max-w-[1244px] mx-auto p-[71px]`,
    heading: `font-semibold font-[34px] leading-[51px] m-0 text-indigo`,
    highlight: `text-indigo`,
    faqs: `mt-[73px] flex flex-col gap-[58px]`,
    highlightedQuestion: ``,
    prompt: `flex flex-col border-2.5 border-solid border-[#696969] last-of-type:border-b-0`,
    row: `flex items-center w-full`,
    question: `text-dark font-semibold text-[21px] leading-[32px] m-0`,
    expandable: `ml-auto cursor-pointer`,
    answer: `m-0 text-dark text-lg leading-7`

}

const reducer: Reducer<Faq[], ReducerAction> = (state, action) => {
    switch (action.type) {
        case "TOGGLE_FAQ" as ReducerActionType:
            return state.map(faq => {
                if (faq.question === action.payload) {
                    return { ...faq, expanded: !faq.expanded }
                }
                return faq
            })
        default:
            return state
    }
}

export default function FaqList() {
    const [faqs, dispatch] = useReducer(reducer, FAQS)

    return (
        <div className={classNames.faqList}>
            <h2 className={classNames.heading}>Preguntas Frecuentes</h2>
            <p>Aclaramos todas las dudas que tengas ¿Aún tienes preguntas? <Link href="/#contact"><b className={classNames.highlight}>Ponte en contacto con nuestro equipo.</b></Link></p>
            <div id="faqs" className={classNames.faqs}>
                {faqs.map((faq) => {
                    const highlightedQuestion = faq.question === "¿Las empresas pueden proponer nuevos proyectos a las entidades públicas?"
                    const phasesQuestion = faq.question === `¿Cuáles son las fases de un proyecto de obras por impuestos?`
                    return (
                        <>
                            <div key={faq.question} className={`${highlightedQuestion ? classNames.highlightedQuestion : ""} ${classNames.prompt}`} id={highlightedQuestion ? "highlightedQuestion" : ""}>
                                <div className={classNames.row}>
                                    <h3 className={classNames.question}>{faq.question}</h3>
                                    <Image alt="see answer button" onClick={() => dispatch({ type: "TOGGLE_FAQ" as ReducerActionType, payload: faq.question })} className={classNames.expandable} src={faq.expanded ? expanded : notExpanded} />
                                </div>
                                {faq.expanded ? <div className={classNames.answer}>{phasesQuestion ?
                                    (<>
                                        <span>Son 5:</span>
                                        <ul className="list-disc">
                                            <li>FASE 1: Priorización del proyecto a financiarse</li>
                                            <li>FASE 2: Actos previos al proceso de licitación (Informe Previo Contraloría)</li>
                                            <li>FASE 3: Licitación</li>
                                            <li>FASE 4: Ejecución de obra</li>
                                            <li>FASE 5: Obtención del CIPRL</li>
                                        </ul>
                                    </>) : faq.answer
                                }
                                </div> : null}
                            </div>
                            <Separator key={faq.question} />
                        </>
                    )
                })}
            </div>
        </div>
    )
}
