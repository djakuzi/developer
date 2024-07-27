import cn from 'classnames';
import MyInfo from '../MyInfo/MyInfo'
import Portfolio from '../Portfolio/Portfolio'
import styles from './HomePage.module.css'
import burgerIMG from '../../../public/homePage/burger.svg'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { burgerActions } from '../../redux/slices/burger.slice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export default function HomePage(){

    const dispatch = useDispatch<AppDispatch>()
    const {valid} = useSelector( (s:RootState) => s.burger)
    const navigate = useNavigate()

    useEffect(()=>{
        navigate('/resume')
    },[])
    return (
        <div  className={styles.homePage}>

            <div className={cn(styles.shadow,{
                    [styles.open]: valid
                })}>

            </div>

            <div onClick={()=>dispatch(burgerActions.valid({valid}))} className={styles.burger}>
                <img src={burgerIMG} alt="" />
            </div>
            <MyInfo></MyInfo>
            <Portfolio></Portfolio>

        </div>
    )
}