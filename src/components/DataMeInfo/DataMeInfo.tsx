
import styles from './DataMeInfo.module.css'
import { DataMeInfoProps } from './DataMeInfo.props'

export default function DataMeInfo(props:DataMeInfoProps){

    const valid = props.title == 'Дата рождения' || props.title == 'Город'

    const link = (props.title == 'E-mail') ? 'mailto:' + props.info : 'tel: +79517158855'

    return (
        <div className={styles.dataMeInfo}>

           <div className={styles.img}>
            <img src={props.img} alt={props.alt} />
           </div>

           <div className={styles.wrapper}>
            <div className={styles.title}>{props.title}</div>
            { !valid && <a href={link} className={styles.info}>{props.info}</a>}
            { valid && <div className={styles.info}>{props.info}</div>}
           </div>

        </div>
    )
}