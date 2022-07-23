import Project from './Project';
import styles from './Projects.module.scss';
import projectsJson from 'files/projects.json';
import { useState } from 'react';


export default function Projects() {
    const [idImgFull, setIdImgFull] = useState(Number);

    /*
    let projectsList: JSX.Element[];
    projectsList = projectsJson.map((project) => {
        return (<Project {...project}  />);
    });
*/
    function setImageFullscreen(id: number) {
        if(idImgFull !== 0) {
            setIdImgFull(0);
        }
        else {
            setIdImgFull(id);

        }
    }

    return (
        <div className={styles.Projects}>
            <h2 className={styles.Projects__title}>Projetos</h2>
            <div className={styles.Projects__content}>
                {projectsJson.map((project => {
                    return (<Project 
                        key={project.id}
                        {...project} 
                        setImageFullscreen={setImageFullscreen} 
                        />);
                }))
                }

            </div>

        </div>
    )
}