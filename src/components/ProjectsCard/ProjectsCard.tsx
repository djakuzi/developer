import { ProjectsCardProps } from './ProjectsCard.props'
import styles from './ProjectsCard.module.css'
import { AppDispatch } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { projectsActions } from '../../redux/slices/projects.slice'

export default function ProjectsCard(props:ProjectsCardProps){

    const dispatch = useDispatch<AppDispatch>()


    return (
       <div className={styles.projectsCard}>
{/* style={{backgroundImage: `url(${props.img})`}} */}
            <div className={styles.img} >
                <img src={props.img} alt="" />
            </div>

            <div className={styles.name}>{props.name}</div>

            <div onClick={ () => dispatch( projectsActions.open({projects: props}))} className={styles.details}>
               <div>Подробнее</div>
            </div>
        </div>
    )
}