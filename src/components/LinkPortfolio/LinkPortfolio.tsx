import cn from 'classnames';
import { NavLink } from 'react-router-dom'
import styles from './LinkPortfolio.module.css'
import { LinkPortfolioProps } from './LinkPortfolio.props'

export default function LinkPortfolio(props:LinkPortfolioProps){

    return (
        <NavLink className={ ({isActive}) => cn(styles.linkPortfolio, {
           [styles.active]: isActive,
        })} to={props.link}>{props.title}</NavLink>
    )
}