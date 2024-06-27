
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import LinkPortfolio from '../../components/LinkPortfolio/LinkPortfolio'
import WindowMoreInfoProject from '../../components/WindowMoreInfoProject/WindowMoreInfoProject'
import { RootState } from '../../redux/store'
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

    const {projects} = useSelector( (s:RootState) => s.projects)

    return (
        <div className={styles.portfolio}>

            <div className={styles.navBar}>
                {...LINK_PORTFOLIO.map( (el, id) => <LinkPortfolio key={id} link={el.link} title={el.title}></LinkPortfolio>)}
            </div>

            <div className={styles.content}>
                <Outlet></Outlet>
            </div>

            { projects && <WindowMoreInfoProject {...projects} />}


        </div>
    )
}