import React from "react";
import styles from '../LevelBar.module.scss'

interface ISize {
    size: number
}

export default function SquareBar({size}: ISize) {
    const arrayDiv = new Array();
    
    console.log();
    for (let i = 0; i < size; i++) {
        arrayDiv.push(<div key={i} className={styles.LevelBar__active}></div>);
    }
    for (let i = size; i < 10; i++) {
        arrayDiv.push(<div key={i} className={styles.LevelBar__inactive}></div>);

    }
    return <>
        {arrayDiv}
    </>

}