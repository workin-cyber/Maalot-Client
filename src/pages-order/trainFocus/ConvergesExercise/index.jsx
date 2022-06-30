import { useContext, useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import Button_w140_w383_Link from "../../../components/common/Button w140-OR-w383 Link"
import StartFooter from "../../../components/common/StartFooter"
import styles from './style.module.css'

// Creator : Team 5 - Netanel Levi, Nti Tuka, Nati Shenker
function ConvergesExercise() {

    const [focusArr, setFocusArr] = useState([])
    const navigate = useNavigate()
    return <>
        <div className={styles.button}>
            < Button_w140_w383_Link onClick={() => { navigate('start-round', { state: { focusArr }, setFocusArr }) }} text="Continue" />
        </div>
    </>
}


export default ConvergesExercise