import { useLocation } from 'react-router-dom'
import styles from './style.module.css'
import img from './1.svg'
import {FaUserCircle} from "react-icons/fa"
import Hamburger from './hamburgers/hamburger'


// Creator : Team 1 - politi

//To enter img of user enter on the props img="src"


function HadderDashbord(props){
    const location = useLocation()

    return <>
    <Hamburger/>
        <div className={styles.divHader}>
            <div className={styles.divNamepage}>
                <span className={styles.spanTxt}>{location.pathname.slice(1)}</span>
            </div> 
            <div className={styles.divNavImg}>
                <button className={styles.buttonBell} type='button'><img src={img} /></button>
                <button style={props.img?{backgroundImage:`url(${props.img})`}: {}} className={styles.buttonImg} type='button'>{props.img ? "":<FaUserCircle/> }</button>
            </div>

        </div>
        
    </>
}


export default HadderDashbord