
import { Outlet } from 'react-router-dom'
import LinkPortfolio from '../../components/LinkPortfolio/SocialMedia'
import styles from './Portfolio.module.css'


const LINK_PORTFOLIO = [
    {
        link: '/developer/resume',
        title: 'Резюме'
    },
    {
        link: '/developer/projects',
        title: 'Pet-проекты'
    },
    // {
    //     link: '/homePage/aboutMe',
    //     title: 'Обо мне'
    // }
]

export default function Portfolio(){

  

    return (
        <div className={styles.portfolio}>

            <div className={styles.navBar}>
                {...LINK_PORTFOLIO.map( (el, id) => <LinkPortfolio key={id} link={el.link} title={el.title}></LinkPortfolio>)}
            </div>

            <div className={styles.content}>
                <Outlet></Outlet>
            </div>



        </div>
    )
}