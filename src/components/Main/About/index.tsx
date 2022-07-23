
import IconLink from 'components/common/IconLink';
import styles from './About.module.scss';


export default function About() {
    return (
        <section className={styles.About}>
            <h2 className={styles.About__title}>Sobre Mim</h2>
            <div className={styles.About__content}>
                <p className={styles['About__content--text']}>Meus primeiros passos na área do desenvolvimento foram com a criação de jogos. Recentemente, iniciei meus estudos na parte do Front-End. Estou sempre em busca de novos conhecimentos e, atualmente, estou em busca do meu primeiro emprego na área.</p>
                {/*<div className={styles['About__content--photo']} ></div>*/}
                <div className={styles['About__content--links']}>
                    <div className={styles['About__content--link']}>
                        <IconLink url={"https://www.linkedin.com/in/roger-romaniczen-90a1a014b/"} />
                    </div>
                    {/*
                        <a href="https://github.com/Roger2405" target="_blank">GitHub</a>

    */}
                </div>
            </div>
        </section>
    )
}