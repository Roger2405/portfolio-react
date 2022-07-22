
import styles from './About.module.scss'


export default function About() {
    return (
        <section className={styles.About}>
            <h2 className={styles.About__title}>Sobre Mim</h2>
            <div className={styles.About__content}>
                <p className={styles['About__content--text']}>Meus primeiros passos na área do desenvolvimento foram com a criação de jogos. Recentemente, iniciei meus estudos na parte do Front-End. Estou sempre em busca de novos conhecimentos e, atualmente, estou em busca do meu primeiro emprego na área.</p>
                <div className={styles['About__content--photo']} ></div>
            </div>
        </section>
    )
}