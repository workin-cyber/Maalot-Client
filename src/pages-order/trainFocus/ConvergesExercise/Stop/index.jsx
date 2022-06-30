import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button_w140_w383_Link from "../../../../components/common/Button w140-OR-w383 Link"
import StartFooter from "../../../../components/common/StartFooter"
import styles from './style.module.css'

// Creator : Team 5 - Netanel Levi, Nti Tuka, Nati Shenker
function Stop(props) {
    const navigate = useNavigate()
    const location = useLocation()
    const { focusArr } = location.state

    function onStop() {
        focusArr[focusArr.length] = (Math.random() * 100)
        navigate(focusArr.length < 4 ? "/student/train-focus/start-round" : "/student/train-focus/result-summary", {
            state: { focusArr },
            setFocusArr: location.state.setFocusArr
        })
    }

    return <>
        <div className={styles.button}>
            < Button_w140_w383_Link text="Stop" onClick={onStop} />
        </div>
    </>
}


export default Stop