
import styles from './SocialMedia.module.css'
import { SocialMediaProps } from './SocialMedia.props'

export default function SocialMedia(props:SocialMediaProps){

    return (
        <div className={styles.socialMedia}>

            <a className={styles.link} href={props.link}>
                <img src={props.img} alt={props.alt} />
            </a>
        </div>
    )
}