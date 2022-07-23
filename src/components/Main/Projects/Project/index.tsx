
import IconLink from 'components/common/IconLink';
import { IProject } from 'interfaces/projects';
import { useState } from 'react';
import styles from './Project.module.scss';

interface IProps extends IProject {
    
    setImageFullscreen: (id: number) => void
}

export default function Project({ 
    id, 
    url, 
    name, 
    iconSrc,
    screenshots,
    setImageFullscreen
    }: IProps) {
    const [imageIndex, setImageIndex] = useState(0);
    const [showImages, setShowImages] = useState(false);
    
    const lastIndexScreenshot = screenshots.length - 1;
    function nextImage() {
        if (imageIndex < lastIndexScreenshot) {
            setImageIndex(imageIndex + 1);
        }
        else {
            setImageIndex(0);
        }
    }
    function previousImage() {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        }
        else {
            setImageIndex(lastIndexScreenshot)
        }
    }
    function viewImages() {
        setShowImages(!showImages);
        if(screenshots.length == 0) {
            setShowImages(false);
        }
    }
    
    return (


        <div className={styles.Project} >
            <div className={styles.Project__header} onClick={viewImages}>
                <img className={styles['Project__header--icon']} src={iconSrc} alt="ícone do projeto" />
                <h3 className={styles['Project__header--name']} >{name}</h3>
                <IconLink url={url} />
            </div>
            <div className={`${styles.Project__screenshots} ${!showImages && styles['Project__screenshots--hideInMobile']} ${screenshots.length === 0 && styles['Project__screenshots--hide']}`} >
                <button onClick={previousImage} className={styles['Project__screenshots--buttonLeft']}>{'<'}</button>
                
                <img className={styles['Project__screenshots--img']} src={screenshots[imageIndex]} onClick={() => setImageFullscreen(id)} alt="Captura de tela do projeto em execução" />
                <button onClick={nextImage} className={styles['Project__screenshots--buttonRight']}>{'>'}</button>
            </div>


        </div>

    )
}