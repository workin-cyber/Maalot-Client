import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button_w140_w383_Link from "../../../../components/common/Button w140-OR-w383 Link"
import StartFooter from "../../../../components/common/StartFooter"
import styles from './style.module.css'

// Creator : Team 5 - Netanel Levi, Nti Tuka, Nati Shenker
function StartRound(props) {
    const navigate = useNavigate()
    const location = useLocation()

    return <>
        <StartFooter title={`Start round ${(location.state.focusArr.length) + 1}/4`}
            text="Starting from arms length, press play and then slowly bring device towards your nose. 
            When it starts to feel uncomfortable or you see more than one dot click stop"
            onclick={() => { navigate('stop', { state: { focusArr: location.state.focusArr } }) }} />
    </>
}

export default StartRound