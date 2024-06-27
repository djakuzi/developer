import styles from './WindowMoreInfoProject.module.css'
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { ProjectsCardProps } from '../ProjectsCard/ProjectsCard.props';
import { projectsActions } from '../../redux/slices/projects.slice';
import closeIMG from '../../../public/Portfolio/close.svg';

export default function WindowMoreInfoProject(props:ProjectsCardProps){

    const dispatch = useDispatch<AppDispatch>()
    const {validDetails} = useSelector( (s:RootState) => s.projects)

    return (
        <div className={ cn(styles.window,{
            [styles.open] : validDetails
        })} >

            <div className={styles.container}>

                <div onClick={() => dispatch(projectsActions.close())} className={cn(styles.close,{
                    [styles.open]: validDetails
                    })}>
                        <img src={closeIMG} alt="" />
                </div>

                <div className={styles.img}>
                    <img src={props.img} alt="" />
                </div>

                <div className={styles.name}> {props.name} </div>

                <div className={styles.wrapper}>
                    <div className= {cn(styles.version, {
                        [styles.colorChange]: props.sort == 'ready'
                    })}>{props.version}</div>

                    <a href={props.link} className={styles.link} target='_blank'> Просмотр</a>
                </div>

                <p className={styles.addition}>{props.addition}</p>

                <div className={styles.possibilities}>
                    <div className={styles.title}>Возможности</div>
                    {...props.possibilities.map( (el, i) => <li key={i}>{el}</li>)}
                </div>

                <div className={styles.technologies}>
                    <div className={styles.title}>Технологии</div>
                    {...props.technologies.map( (el, i) => <li key={i}>{el}</li>)}
                </div>
            </div>

        </div>
    )
}