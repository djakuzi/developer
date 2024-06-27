import { SortProjectsCardProps } from './ProjectsCard.props'
import styles from './ProjectsCard.module.css'

export default function ProjectsCard(props:SortProjectsCardProps){



    return (
       <div className={styles.sortProjectsCard}>
        {props.sort}
        </div>
    )
}