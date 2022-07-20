
import { ISkill } from 'interfaces/skills';
import React, { Children } from 'react';
import styles from './LevelBar.module.scss'
import SquareBar from './SquareBar';

interface ILevel {
    level: number
}

export default function LevelBar( {level}: ILevel, children?: React.ReactNode) {
    return (
        
        <div className={styles.LevelBar}>
            <SquareBar size={level} />
        </div>
    )
}
