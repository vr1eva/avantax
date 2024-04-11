import { StaticImageData } from "next/image"
import { MouseEventHandler, ReactElement, ReactNode } from "react"

export type Faq = {
    question: string,
    answer?: string,
    expanded: boolean,
}

export enum ReducerActionType {
    TOGGLE_FAQ = "TOGGLE_FAQ"
}

export type ReducerAction = {
    type: ReducerActionType,
    payload: string
}

export type Teammate = {
    id: string,
    name: string,
    role: string,
    bio: string,
    orientation: string,
    color: string,
    image: StaticImageData,
}

export type WorkbookRowHeader = {
    text: string,
    key: string,
}

export type WorkbookRowEntry = {
    id: string,
    department: string,
    status: string,
    level: string,
    province: string,
    district: string,
    entity: string,
    snipCode: string,
    name: string,
    tipology: string,
    investment: string,
    ciprlMax: string,
}
export interface TableProps {
    data: WorkbookRowEntry[]
}

export enum WorkbookRowFilter {
    status = "status",
    level = "level",
    department = "department",
    province = "province",
    district = "district",
    entity = "entity",
    snipcode = "snipCode",
    name = "name",
    tipology = "tipology",
    ciprlMax = "ciprlMax",
}

export type BenefitCardProps = {
    title: string,
    description: string,
    children: React.ReactNode
}

export type BenefitIcons = {
    buildings: string,
    convert: string,
    cupheart: string,
    status: string,
    medal: string,
    ranking: string,
    award: string,
    money: string
}

export enum BenefitIconKey {
    buildings = "buildings",
    convert = "convert",
    cupheart = "cupheart",
    status = "status",
    medal = "medal",
    ranking = "ranking",
    award = "award",
    money = "money"
}

export type Kpi = {
    count: number,
    symbol: string,
    sufix?: string,
    legend: string
}

export interface KpiProps {
    kpi: Kpi
}

export type ServiceIcons = {
    board: string,
    tasks: string,
    verified: string,
    user: string,
    approval: string
}

export enum ServiceIconKey {
    board = "board",
    tasks = "tasks",
    verified = "verified",
    user = "user",
    approval = "approval",
}

export interface ServiceCardProps {
    title: string
    items: string[],
    color: string,
    background: string,
    icon: string
}

export type Colors = {
    dark: string,
    orange: string,
    beige: string,
    mintGreen: string,
    indigo: string,
    purple: string,
    green: string,
    light: string
}

export enum ColorKey {
    dark = "dark",
    orange = "orange",
    beige = "beige",
    mintGreen = "mintGreen",
    indigo = "indigo",
    purple = "purple",
    green = "green",
    light = "light",
}

export interface TextFieldProps {
    label: string,
    placeholder: string,
    name: string,
    type?: string,
}

export interface TextAreaProps {
    label: string,
    placeholder: string,
    name: string,
}

export type DropdownMenuOption = ReactElement

export interface DropdownMenuProps {
    options: DropdownMenuOption[]
}

export type LogoProps = {
    className?: string,
    inversed?: boolean
}

export enum QuickReplyType {
    cita = "cita",
    consulta = "consulta",
    cotizacion = "cotizacion"
}

export interface QuickReplyProps {
    type: QuickReplyType,
    saveCurrentProgress: React.Dispatch<React.SetStateAction<any>>
    closeChat: MouseEventHandler
}

export interface ActionPromptProps {
    prompt: string,
    clearProgress: React.Dispatch<React.SetStateAction<any>>,
}

export interface MessageBubbleProps {
    children: ReactElement,
    author?: string
}

export interface StatusLedProps {
    active: boolean
    mini?: boolean
}

export interface StatusLabelProps {
    prompt: string,
}

export interface TypographyProp {
    children: ReactNode
}

export type Project = {
    id: number,
    status: string,
    level: string,
    department: string,
    province: string,
    district: string,
    entity: string,
    snipCode: number,
    name: string,
    tipology: string,
    investment: string,
    ciprlMax: string
}

export interface QuickRepliesProps {
    closeChat: MouseEventHandler
}