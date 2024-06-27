

import ProjectsCard from '../../components/ProjectsCard/ProjectsCard'
import TitleLink from '../../components/TitleLink/TitleLink'
import { DATA_PROJECTS } from '../../data/projects'
import styles from './Projects.module.css'

export default function Projects(){

    return (
        <div className={styles.projects}>
            <TitleLink>Pet-проекты</TitleLink>

            <div className={styles.projectsList}>
                {...DATA_PROJECTS.map( (el, i) => <ProjectsCard key={i} {...el}></ProjectsCard>)}
            </div>
        </div>
    )
}