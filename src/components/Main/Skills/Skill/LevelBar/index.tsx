
import { ISkill } from 'interfaces/skills';
import React, { Children } from 'react';
import styles from './LevelBar.module.scss';

interface ILevel {
    level: number
}

export default function LevelBar( {level}: ILevel, children?: React.ReactNode) {
    const arrayDiv = new Array();
    
    console.log();
    for (let i = 0; i < level; i++) {
        arrayDiv.push(<div key={i} className={styles.LevelBar__active}></div>);
    }
    for (let i = level; i < 10; i++) {
        arrayDiv.push(<div key={i} className={styles.LevelBar__inactive}></div>);

    }
    return (
        <div className={styles.LevelBar}>
            {arrayDiv}
        
    </div>)
}
