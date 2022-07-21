import { IProject } from 'interfaces/projects';
import { useState } from 'react';
import styles from './Project.module.scss';


export default function Project({ id, name, destaque, url, iconSrc, screenshots }: IProject) {
    const  [imageIndex, setImageIndex] = useState(0);
    function nextImage() {
        setImageIndex(imageIndex + 1);
    }
    function previousImage() {
        setImageIndex(imageIndex - 1);
    }
    return (
        <div className={styles.Project} >
            <img className={styles.Project__icon} src={iconSrc} alt="ícone do projeto" />
            <h3 className={styles.Project__name} >{name}</h3>
            <div className={styles.Project__screenshots} >
                {/*screenshots.map(image => <img src={image} />)*/}
                
                    <button onClick={previousImage} className={styles['Project__screenshots--buttonLeft']}>{'<'}</button>
                    <img src={screenshots[imageIndex]} alt="Captura de tela do projeto em execução"/>
                    <button onClick={nextImage} className={styles['Project__screenshots--buttonRight']}>{'>'}</button>
            </div>
        </div>
        
    )
}