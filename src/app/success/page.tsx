import { useRouter } from 'next/router';
import { useEffect } from "react"
import styles from "./success.module.scss"

export default function Success() {
    const router = useRouter();
    useEffect(() => {
        const delay = 2200
        const timer = setTimeout(() => {
            router.push("/")
        }, delay)

        return () => {
            clearInterval(timer);
        };
    }, [router]);


    return (
        <div className={styles.container}>
            <h1 className={styles.message}>¡Mensaje enviado!</h1>
            <p className={styles.redirectNote}>Redireccionando al inicio...</p>
        </div>
    )
}

