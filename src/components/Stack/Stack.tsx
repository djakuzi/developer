
import styles from './Stack.module.css'
import { StackProps } from './Stack.props'

export default function Stack(props:StackProps){

    return (
    <div className={styles.container}>
        <div className={styles.stack}>
            <div className={styles.img}>
                <img src={props.img} alt={props.alt} />
            </div>
            <div className={styles.title}>{props.title}</div>
        </div>

        {/* <div className={styles.line}>

        </div> */}
    </div>   
    )
}