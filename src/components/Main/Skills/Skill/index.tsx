import { ISkill } from "interfaces/skills";
import LevelBar from "./LevelBar";
import styles from './Skill.module.scss'

interface SkillProps {
    skill: ISkill
}
export default function Skill({skill}: SkillProps) {
    var levelText;
    switch (skill.nivel) {
        case 1:
            levelText = 'Iniciante';
            break;
        case 2:
            levelText = 'Básico';
            break;
        case 3:
            levelText = 'Intermediário';
            break;
    }
    return (
        <div className={styles.Skill}>
            <h3 className={styles.Skill__name}>{skill.nome}</h3>
            <p className={styles.Skill__expTime}>Tempo de experiência: {timeFormat(skill.tempo)}</p>
            <LevelBar level={skill.nivel}/>
            <p className={styles.Skill__level}>{levelText}</p>
        </div>
    )
}


function timeFormat(intMonths: number) {
    const years = Math.floor(intMonths/12);
    const months = intMonths - (12*years);
    let textYears = '';
    let textMonths = '';

    if(years == 1) {
        textYears = '1 ano';
    }
    else if(years > 1) {
        textYears = `${years} anos`;
    }

    if(months == 1) {
        textMonths = '1 mês';
    }
    else if(months > 1) {
        textMonths = `${months} meses`;
    }
    return `${textYears} ${textMonths}`;
}