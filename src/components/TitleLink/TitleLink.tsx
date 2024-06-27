
import styles from './TitleLink.module.css'
import { TitleLinkProps } from './TitleLink.props'


export default function TitleLink({children}:TitleLinkProps){

    return (
        <div className={styles.titleLink}>{children}</div>
    )
}