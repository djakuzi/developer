

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProjectsCard from '../../components/ProjectsCard/ProjectsCard'
import SortProjectsCard from '../../components/SortProjectsCard/SortProjectsCard'
import TitleLink from '../../components/TitleLink/TitleLink'
import { DATA_PROJECTS } from '../../data/projects'
import { DATA_SORT_PROJECTS } from '../../data/sortProjects'
import { RootState } from '../../redux/store'
import styles from './Projects.module.css'

export default function Projects(){

    const {sort} = useSelector( (s:RootState) => s.projects)

    useEffect(()=> {},[sort])

    return (
        <div className={styles.projects}>
            <TitleLink>Pet-проекты</TitleLink>

            <div className={styles.sort}>
                {...DATA_SORT_PROJECTS.map( (el, i) => <SortProjectsCard key={i} {...el}></SortProjectsCard>)}
            </div>

            <div className={styles.projectsList}>
                {...DATA_PROJECTS.filter((el) => (sort == 'all') ? true : (sort == el.sort) ? true : false).map( (el, i) => <ProjectsCard key={i} {...el}></ProjectsCard>)}
            </div>
        </div>
    )
}