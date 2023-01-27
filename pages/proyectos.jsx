import Table from "./components/Table.jsx";
import Button from "./components/Button.jsx"
import styles from "./proyectos.module.scss"
import Link from "next/link"
import useSWR from 'swr'
import Head from "next/head"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Proyectos() {
  const { data, error } = useSWR('/api/workbook', fetcher)

  if (error) return <div>Falló la carga.</div>
  if (!data) return <div className={styles.loadingMessage}>Cargando proyectos...</div>
  return (
    <>
    <Head>
    <title>Avantax / Proyectos</title>
    <meta name="description" content="Solucion de impuestos" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
    <div className={styles.proyectos}>
      <h2 className={styles.heading}><b>Cartera de </b> proyectos</h2>
      <p className={styles.note}>Aquí encontrarás los proyectos de todas las entidades públicas a nivel nacional viabilizados a través de obras por impuestos y listos para su ejecución.</p>
      <Table data={data.workbook} />


      <div className={styles.cta}>
        <h2 className={styles.ctaHeading}>¿No encuentras
          proyectos de tu interés?</h2>
        <Link className={styles.ctaButton} href="/faq/7#highlightedQuestion"><Button variant="primary" name="Haz click aquí" /></Link>
      </div>
    </div>
    </>
  )
}