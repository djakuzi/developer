import cn from 'classnames';
import styles from './MyInfo.module.css'
import faceIMG from '../../../public/MyInfo/face.jpeg'
import DataMeInfo from '../../components/DataMeInfo/DataMeInfo'
import emailIMG from '../../../public/MyInfo/email.svg'
import numberIMG from '../../../public/MyInfo/number.svg'
import dateBirthIMG from '../../../public/MyInfo/dataBirth.svg'
import vkIMG from '../../../public/MyInfo/vk.svg'
import tgIMG from '../../../public/MyInfo/tg.svg'
import cityIMG from '../../../public/MyInfo/city.svg'
import SocialMedia from '../../components/SocialMedia/SocialMedia'
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import closeIMG from '../../../public/MyInfo/close.svg'
import { burgerActions } from '../../redux/slices/burger.slice';



const DATA_INFO_ME = [
    {
        img: emailIMG,
        title: 'E-mail',
        info: 'matvey.ananev.02@mail.ru',
        alt: 'иконка почты'
    },
    {
        img: numberIMG,
        title: 'Номер',
        info: '+7 (951) 715 88 55',
        alt: 'иконка номера'
    },
    {
        img: dateBirthIMG,
        title: 'Дата рождения',
        info: "20.09.2002",
        alt: 'иконка даты рождения'
    },
    {
        title: 'Город',
        img: cityIMG,
        info: 'Смоленск, Cанкт-Петербург. Возможен переезд в другой город',
        alt: 'Иконка города'
    }
]

const DATA_SOCIAl_MEDIA =[
    {
        alt: 'Матвей Ананьев',
        link: 'https://vk.com/ooo_motik',
        img: vkIMG
    },
    {
        alt: '@ooo_motik',
        link: 'https://t.me/ooo_motik',
        img: tgIMG
    }
]
export default function MyInfo(){

    const {valid} = useSelector( (s:RootState)=> s.burger)
    const dispatch = useDispatch<AppDispatch>()
    
    return (
        <div className={cn(styles.myInfo,{
            [styles.open]: valid
            })}>
            
            <div onClick={() => dispatch(burgerActions.valid({valid}))} className={cn(styles.close,{
                [styles.open]: valid
                })}>
                    <img src={closeIMG} alt="" />
            </div>

            <div className={styles.wrapper_img}>
                <img src={faceIMG} alt="моя фотография" />
            </div>

     
            <div className={styles.name}>Матвей</div> 

            <div className={styles.developer}>
                Frontend-разработчик
            </div>

            <a className={styles.github} href="https://github.com/djakuzi">Мой GitHub</a>
            
            <hr className={styles.hr}/>

            <div className={styles.info}>
                {...DATA_INFO_ME.map( (el, id) => <DataMeInfo key={id} img={el.img} info={el.info} title={el.title} alt={el.alt}/>)}
            </div>

             <hr className={styles.hr}/>

            <div className={styles.socialMedia}>
                {...DATA_SOCIAl_MEDIA.map( (el, id) => <SocialMedia key={id} link={el.link} img={el.img} alt={el.alt}></SocialMedia>)}
            </div>


        </div>
    )
}