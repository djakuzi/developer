import { ProjectsCardProps } from './ProjectsCard.props'
import styles from './ProjectsCard.module.css'

export default function ProjectsCard(props:ProjectsCardProps){



    return (
       <div className={styles.projectsCard}>
{/* style={{backgroundImage: `url(${props.img})`}} */}
            <div className={styles.img} >
                <img src={props.img} alt="" />
            </div>

            <div className={styles.name}>{props.name}</div>

            <div  className={styles.details}>
               <div>Подробнее</div>
            </div>
        </div>
    )
}