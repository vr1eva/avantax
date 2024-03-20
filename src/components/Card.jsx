import styles from "./Card.module.scss"
export default function Card({ title, description, children }) {
  return (
    <div className={styles.card}>
      {children}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}