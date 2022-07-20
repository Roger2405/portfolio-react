import Project from './Project';
import styles from './Projects.module.scss';
import projectsJson from 'files/projects.json';


export default function Projects() {
    let projectsList: JSX.Element[];
    projectsList = projectsJson.map((project) => {
        return (<Project {...project} />);
    });
    return (
        <div className={styles.Projects}>
            <h2 className={styles.Projects__title}>Projetos</h2>
            {projectsList}

        </div>
    )
}