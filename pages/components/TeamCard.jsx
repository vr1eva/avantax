import styles from "./TeamCard.module.scss"
import Image from "next/image"

export default function TeamCard({ name, orientation, bio, image, role, color }) {
  const cardClassName = orientation == "left" ? styles.leftyCard : styles.rightyCard
  const imageCardClassName = orientation == "left" ? styles.leftyCardImage : styles.rightyCardImage

  return (
    <li className={`${styles.card} ${cardClassName}`}>
      <Image alt={`${name}'s picture`} height={290} width={253} src={image} className={`${styles.cardImage} ${imageCardClassName}`} />
      <div className={styles.description}>
        <h3 className={styles.name}>{name}</h3>
        <p style={{ color: color }} className={styles.role}>{role}</p>
        <div className={styles.bio} dangerouslySetInnerHTML={{ __html: bio }}></div>
      </div>
    </li>
  )
}