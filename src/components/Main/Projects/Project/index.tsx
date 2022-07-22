import IconNewPage from 'assets/img/new_page.png';
import { IProject } from 'interfaces/projects';
import { useState } from 'react';
import styles from './Project.module.scss';
import React from 'react';


export default function Project({ id, name, destaque, url, iconSrc, screenshots }: IProject) {
    const  [imageIndex, setImageIndex] = useState(0);
    const lastIndexScreenshot = screenshots.length -1;
    function nextImage() {
        if(imageIndex < lastIndexScreenshot) {
            setImageIndex(imageIndex + 1);
        }
        else {
            setImageIndex(0);
        }
    }
    function previousImage() {
        if(imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        }
        else {
            setImageIndex(lastIndexScreenshot)
        }
    }
    return (
        
        <div className={styles.Project} >
            <div className={styles.Project__header}>
                <img className={styles['Project__header--icon']} src={iconSrc} alt="ícone do projeto" />
                <h3 className={styles['Project__header--name']} >{name}</h3>
                <a className={styles['Project__header--link']} target="_blank" href={url}><img src={IconNewPage} /></a>
            </div>
            
            <div className={styles.Project__screenshots} >
                {/*screenshots.map(image => <img src={image} />)*/}
                    <button onClick={previousImage} className={styles['Project__screenshots--buttonLeft']}>{'<'}</button>
                    <img src={screenshots[imageIndex]} alt="Captura de tela do projeto em execução"/>
                    <button onClick={nextImage} className={styles['Project__screenshots--buttonRight']}>{'>'}</button>
            </div>
        </div>
        
    )
}