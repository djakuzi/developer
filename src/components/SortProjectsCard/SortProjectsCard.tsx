import cn from 'classnames';
import { SortProjectsCardProps } from './SortProjectsCard.props'
import styles from './SortProjectsCard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { projectsActions } from '../../redux/slices/projects.slice'

export default function SortProjectsCard(props:SortProjectsCardProps){

    const dispacth = useDispatch<AppDispatch>()
    const {sort} = useSelector( (s:RootState) => s.projects)
    
    return (
       <div onClick={()=>dispacth(projectsActions.sort({sort: props.sort}))} className={ cn(styles.sortProjectsCard, {
        [styles.active] : props.sort == sort
       })}>
        {props.title}
        </div>
    )
}