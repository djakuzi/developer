
import styles from './Resume.module.css'
import htmlIMG from '../../../public/Portfolio/Resume/stack/html.svg'
import cssIMG from '../../../public/Portfolio/Resume/stack/css.svg'
import jsIMG from '../../../public/Portfolio/Resume/stack/js.svg'
import reactIMG from '../../../public/Portfolio/Resume/stack/react.svg'
import reduxToolkitIMG from '../../../public/Portfolio/Resume/stack/reduxToolkit.svg'
import tsIMG from '../../../public/Portfolio/Resume/stack/ts.svg'
import reactRouterIMG from '../../../public/Portfolio/Resume/stack/reactRouter.svg'
import gitIMG from '../../../public/Portfolio/Resume/stack/git.svg'
import Stack from '../../components/Stack/Stack'

const DATA_STACK = [
    {
        alt: 'Иконка Git',
        title: 'Git',
        img: gitIMG,
    },
    {
        alt:'иконка HTML',
        title:'HTML',
        img: htmlIMG,
    },
    {
        alt:'иконка CSS',
        title:'CSS',
        img: cssIMG,
    },
    {
        alt:'иконка JS',
        title:'JavaScript',
        img: jsIMG,
    },
    {
        alt:'иконка React',
        title:' ReactJS',
        img: reactIMG,
    },
    {
        alt:'иконка ReactRouter',
        title:'ReactRouter',
        img: reactRouterIMG,
    },
    {
        alt:'иконка ReduxToolkit',
        title:'ReduxToolkit',
        img: reduxToolkitIMG,
    },
    {
        alt:'иконка TS',
        title:'TypeScript',
        img: tsIMG,
    },

    // {
    //     alt:'иконка',
    //     title:'',
    //     img: '',
    // }
]

const DATA_OTHER =[
    {
        title: 'Методолигия БЭМ'
    },
    {
        title: 'Figma'
    },
    {
        title: 'Photoshop'
    },
    {
        title: 'Agile'
    },
    {
        title: 'Scrum'
    }

]

export default function Resume(){

    return (
        <div className={styles.resume}>

            <div className={styles.wrapper}>

                {/* <TitleLink>Резюме</TitleLink> */}

                <div className={styles.header}>Резюме</div>

                <div className={styles.education}>
                    <div>Образование: Высшее;</div>
                    <div>Направление: бизнес-информатика;</div>
                    <div>Специальность: IT-менеджер:</div>
                    <div>ВУЗ: Финансовый университет при правительстве РФ.</div>
                </div>

            </div>
            
  
            <p className={styles.about}>Привет, меня зовут Матвей, я начинающий Frontend-разработчик. 
                <br/>Уже на протяжении года я активно изучаю и практикуюсь в этом направлении. 
                <br/>Основной способ полученния умений и знаний на моем пути - самообучение. 
                <br/>И Конечно же я активно ищу работу для дальнейшего своего развития в этой сфере &#128515;. 
                <br/>Технологии, которые освоенны на данный момент предоставлены ниже.
            </p>

            <div className={styles.title}>Технологии</div>

            <div className={styles.stack}>
                {...DATA_STACK.map( (el, i) => <Stack key={i} title={el.title} img={el.img} alt={el.alt}></Stack>)}
            </div>
             <div className={styles.title}>Прочее</div>

             <div className={styles.other}>
                {DATA_OTHER.map( (el, i) => <div key={i}> {el.title} </div> )}
             </div>

        </div>
    )
}