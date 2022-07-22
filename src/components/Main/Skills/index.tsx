import Skill from './Skill'
import styles from './Skills.module.scss'
import skillsJson from 'files/skills.json'


export default function Skills() {
    return (
        <section className={styles.Skills}>
            <h2 className={styles.Skills__title}>Habilidades</h2>
            <p className={styles.Skills_text}>O tempo de experiência, citado em cada tecnologia abaixo, refere-se à projetos pessoais <i>(listados na seção "Projetos")</i></p>
                {skillsJson?.map(item => <Skill skill={item} key={item.id}/>)}

        </section>
    )
}