import { Faq, Teammate, WorkbookRowHeader, Kpi, BenefitIcons, ServiceIcons, Colors } from "@/types";
import buildings from "../assets/buildings.svg"
import convert from "../assets/convert.svg"
import cupheart from "../assets/cupheart.svg"
import status from "../assets/status.svg"
import medal from "../assets/medal.svg"
import ranking from "../assets/ranking.svg"
import award from "../assets/award.svg"
import money from "../assets/money.svg"
import board from "@/assets/board.svg"
import tasks from "@/assets/tasks.svg"
import verified from "@/assets/verified.svg"
import user from "@/assets/user.svg"
import approval from "@/assets/approval.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"
import instagram from "../assets/instagram.svg"
import mirko from "@/assets/mirko.png"
import ray from "@/assets/ray.png"
import maria from "@/assets/maria.png"
import debora from "@/assets/debora.png"

export const CONTACT_ACTIONS = [
    { label: "Preguntas frecuentes", url: "/#faq" },
    { label: "Sobre Nosotros", url: "/#about" },
    { label: "Sacar una cita", url: "/#contact" },
]

export const CONTACT_ITEMS = [
    { title: "Número de contacto", value: "+51 944 060 980" },
    { title: "Correo electrónico", value: "info@avantax.pe" },
    { title: "Dirección", value: "Pasaje Mártir Olaya 129,  Oficinas 1905 - Miraflores, Lima - Perú" },
]

export const SOCIAL_LINKS = [
    { alt: "linkedin", url: "https://www.linkedin.com/company/avantax-peru/?viewAsMember=true", icon: linkedin },
    { alt: "twitter", url: "https://twitter.com/avantax_peru", icon: twitter },
    { alt: "instagram", url: "https://www.instagram.com/avantax.pe", icon: instagram },
]

export const initialState: Faq[] = [
    {
        question: "¿Qué son las OxI?", answer: `Son una forma de pago del impuesto a la renta de tercera categoría a través del financiamiento de obras públicas de envergadura nacional, regional o local, reguladas por la Ley 29230. Esta modalidad de inversión público-privada genera un gran impacto en la vida de las personas, permitiéndoles acceder a nueva infraestructura y servicios públicos de calidad en tiempo récord, debido a su agilidad. De este modo, las empresas siendo socialmente responsables, contribuyen al cierre de brechas mientras mejoran su reputación y posicionamiento.`, expanded: false
    },
    {
        question: "¿Qué es el CIPRL?", answer: `El Certificado de Inversión Pública Regional y Local (CIPRL), es un documento emitido por el Ministerio de Economía y Finanzas, a través de la Dirección Nacional del Tesoro Público, que tiene por finalidad la cancelación del monto que invierta la empresa privada en la ejecución de los proyectos de obras por impuestos. Este certificado se utiliza para el pago a cuenta o regularización del impuesto a la renta.`, expanded: false
    },
    {
        question: "¿El CIPRL puede ser negociable?", answer: `Sí. El CIPRL puede ser negociable a solicitud de la empresa.
        `, expanded: false
    },
    {
        question: "¿El CIPRL puede fraccionarse?", answer: `Sí. La empresa privada, de acuerdo a sus necesidades, puede solicitar a la Dirección Nacional del Tesoro Público el fraccionamiento de su CIPRL por montos iguales o menores al 80% del impuesto a la renta pagado en el ejercicio anterior. Posteriormente, si el CIPRL tiene carácter de NEGOCIABLE, el saldo puede ser comercializado.`, expanded: false
    },
    {
        question: "¿Qué empresas pueden participar en OxI?", answer: `Podrán participar las personas jurídicas de derecho privado, nacionales o extranjeras, que no estén sujetas a los sistemas administrativos del sector público financiero (Presupuesto Público, Endeudamiento Público), cuyo capital sea cien por ciento (100%) privado, incluidas aquéllas que hayan suscrito contratos o convenios de estabilidad con el Estado peruano.`, expanded: false
    },
    {
        question: "¿Cuáles son las fases de un proyecto de obras por impuestos?", expanded: false
    },
    {
        question: "¿Qué entidades públicas pueden aplicar en OxI?", answer: `Pueden aplicar las entidades públicas del gobierno nacional (Ministerios), los gobiernos regionales, los gobiernos locales (Municipios Provinciales y Distritales), las juntas de coordinación interregional, las mancomunidades regionales, las mancomunidades municipales y las universidades públicas.`, expanded: false
    },
    {
        question: "¿Las empresas pueden proponer nuevos proyectos a la entidades públicas?", answer: `Sí. Si una empresa identifica que un servicio público no se está brindando por la inexistencia de un proyecto, puede proponer a las entidades públicas ideas de proyectos para su desarrollo mediante el mecanismo OxI. A través de una carta de iniciativa privada la empresa hace llegar a la entidad pública su intención de formular y ejecutar un determinado proyecto de inversión bajo la modalidad de OxI. La entidad pública en cuestión es la encargada de evaluar dicha solicitud y emitir una respuesta.`, expanded: false
    },
]

export const team = [
    {
        image: ray,
        id: "ray", name: "Ray Torres", role: "CEO Avantax", bio: `<p>Comunicador social y egresado del programa de post grado en Gobernabilidad y
    Gerencia Política de La Pontificia Universidad Católica del Perú (PUCP). Con estudios
    de especialización en la Gestión de Inversiones Público-Privadas a través del
    mecanismo OxI. <b>Experimentado gestor OxI desde 2013</b>, donde ha desarrollado
    diversos proyectos tanto desde el sector público como el privado.</p>`, orientation: "left", color: "indigo",
    },
    {
        image: debora,
        id: "debora", name: "Débora Rodríguez", role: "Asesor Legal", bio: `<p>Abogada por la Universidad San Martín de Porres desde el año 2014. <b>Especializada en Derecho de la Construcción</b>, Administración Contractual de Proyectos de Infraestructura, Contrataciones Públicas, Obras por Impuestos, Concesiones y APP. Profesional CAPM bajo estándares PMI. </p>`, orientation: "right", color: "orange",
    },
    {
        image: maria,

        id: "maria", name: "Maria Livaque", role: "Especialista en Inversión Pública", bio: `<p>Economista <b>especialista en Inversión Pública </b>, cuenta con un MBA por La Pontificia Universidad Católica del Perú (PUCP). Profesional orientada a la Gestión Pública y con amplia experiencia en la programación, formulación, evaluación y ejecución de proyectos de inversión pública y privada.</p>`, orientation: "left", color: "green",
    },
    {
        image: mirko,
        id: "mirko", name: "Mirko Flores", role: "Jefe de Oficina Técnica", bio: `<p>Ingeniero Civil con maestría en Ingeniería Estructural por la Brunel University London del Reino Unido. Con <b>amplia experiencia en la gestión y desarrollo de proyectos de construcción</b> en el sector inmobiliario e industrial, así como en la dirección de proyectos de infraestructura bajo la metodología PMI.</p>`, orientation: "right", color: "indigo",
    },
]

export const headers: WorkbookRowHeader[] = [
    { text: "Nº", key: "id" },
    { text: "Estado", key: "status" },
    { text: "Nivel", key: "level" },
    { text: "Departamento", key: "department" },
    { text: "Provincia", key: "province" },
    { text: "Distrito", key: "district" },
    { text: "Entidad Pública", key: "entity" },
    { text: "Código SNIP", key: "snipCode" },
    { text: "Nombre del proyecto", key: "name" },
    { text: "Tipologia", key: "tipology" },
    { text: "Monto de inversión referencial (en S/. M)", key: "investment" },
    { text: "Tope CIPRL 2022", key: "ciprlMax" }
]


export const COMPANY_BENEFITS = [
    {
        title: "Responsabilidad Social",
        description: "Pueden manejar sus programas de Responsabilidad Social a coste cero.",
        icon: "medal"
    },
    {
        title: "Mejor posicionamiento",
        description: "Pueden mejorar su reputación y posicionamiento también a coste cero.",
        icon: "ranking"
    },
    {
        title: "Competitividad",
        description: "Pueden destinar sus impuestos para obras puntuales, las cuales podrían elevar la competitividad de la comunidad y de la empresa.",
        icon: "award"
    },
    {
        title: "Retorno de utilidades",
        description: "Pueden obtener un retorno de utilidades si se encargan de la ejecución de obra.",
        icon: "money"
    },
]

export const BENEFITS = [
    {
        title: "Cierre de Brechas",
        description: "Contribuyen al cierre de brechas de infraestructura.",
        icon: "buildings"
    },
    {
        title: "Economía Local",
        description: "Dinamizan la economía local al generar empleo.",
        icon: "convert"
    },
    {
        title: "Impacto Social",
        description: "Generan un impacto social positivo.",
        icon: "cupheart"
    },
    {
        title: "Crecimiento del PBI",
        description: "Contribuyen al crecimiento de Producto Bruto Interno.",
        icon: "status"
    },
]

export const benefitIcons: BenefitIcons = { buildings, convert, cupheart, status, medal, ranking, award, money }

export const KPI: Kpi[] = [
    { count: 30, symbol: "+", sufix: "", legend: "Proyectos" },
    { count: 250, symbol: "+", sufix: "M", legend: "Soles Invertidos" },
]

export const serviceIcons: ServiceIcons = { board, tasks, verified, user, approval }

export const SERVICE_STAGES = [
    {
        background: "purple",
        color: "white",
        icon: "board",
        title: "Fase 1",
        items: ["Evaluación técnica, legal y económica del proyecto de interés, y de ser el caso, formulación y reformulación de estudios de inversión pública.", "Relacionamiento con funcionarios públicos y comunidad vinculados al proyecto."]
    },
    {
        icon: "tasks",
        color: "black",
        background: "mintGreen",
        title: "Fase 2",
        items: ["Desarrollo de documentación previa al proceso de adjudicación del proyecto.", "Proceso de selección privado de empresa contratista encargada de la ejecución del proyecto."]
    },
    {
        icon: "verified",
        background: "orange",
        color: "white",
        title: "Fase 3",
        items: ["Proceso de adjudicación pública del proyecto y otorgamiento de buena pro."]
    },
    {
        icon: "user",
        background: "beige",
        color: "black",
        title: "Fase 4",
        items: ["Gerencia y supervisión del proyecto a través de nuestra PMO.", "Administración contractual del proyecto."]
    },
    {
        icon: "approval",
        color: "white",
        background: "indigo",
        title: "Fase 5",
        items: ["Obtención del CIPRL. "]
    },
]

export const colors: Colors = {
    dark: "#212121",
    orange: "#D57315",
    beige: "#D8CDBA",
    mintGreen: "#70B39C",
    indigo: "#454797",
    purple: "#5A599C",
    green: "#1E8231",
    light: "#ECEBE9"
}

export const LINKS = [
    { name: 'Inicio', path: '/' },
    { name: 'Beneficios', path: '/#beneficios' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Contáctanos', path: '/#contacto' },
];

export const HIGHLIGHTED_PATH = "/#contacto"

export const QUICK_REPLIES = [
    { label: "Solicitar cotizacion" },
    { label: "Agendar cita" },
    { label: "Realizar consulta" },
]