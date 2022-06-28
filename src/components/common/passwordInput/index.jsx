import { useState } from 'react'
import styles from './style.module.css'
import { ImEye, ImEyeBlocked } from "react-icons/im";
// Creator : Team 1 - Avi
function PassInput(props) { // ------------- yoda work -------------  eye function visable true/fales, end input type password 
    const [showPass, setShowPass] = useState(false)
    return <div className={`${styles.passInput} ${props.sizStyleDiv}`}>
        <label className={`${styles.labelStyle} ${props.labelStyle} `}>{props.description}</label>
        <input name={props.name} type={showPass ? 'text' : 'password'} className={`${styles.inputArea} ${props.sizStyleInput}`}  onChange={props.onChange} />
        <button className={styles.passBtn} onClick={(e) => {e.preventDefault();setShowPass(!showPass)}}>{showPass ? <ImEye /> : <ImEyeBlocked />}</button>
    </div>
}


export default PassInput