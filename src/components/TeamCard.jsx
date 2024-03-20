import styles from "./TeamCard.module.scss"
import Image from "next/image"

export default function TeamCard({ name, orientation, bio, image, role, color }) {
  const cardClassName = orientation == "left" ? styles.leftyCard : styles.rightyCard
  return (
    <li className={`${styles.card} ${cardClassName}`}>
      <section className={styles.description}>
        <Image priority={true} align="right" alt={`${name}'s picture`}  src={image} className={`${styles.cardImage}`} />
          <div className={styles.details}>
            <h3 className={styles.name}>{name}</h3>
            <p style={{ color: color }} className={styles.role}>{role}</p>
          </div>
      </section>
      <div className={styles.bio} dangerouslySetInnerHTML={{ __html: bio }}></div>
    </li>
  )
}