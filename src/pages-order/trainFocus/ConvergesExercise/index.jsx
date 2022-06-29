import { useState } from 'react'
import Button_w140_w383_Link from "../../../components/common/Button w140-OR-w383 Link"
import StartFooter from "../../../components/common/StartFooter"
import styles from './style.module.css'

// Creator : Team 5 - Netanel Levi, Nti Tuka, Nati Shenker
function ConvergesExercise() {
    const [status, setStatus] = useState(1)
    switch (status) {
        //to-do
        case 1:
            return <>
                <div className={styles.button}>
                    < Button_w140_w383_Link text="Continue" onClick={() => { setStatus(2) }} />
                </div>
            </>
            break;
        case 2:
            return <>
                <StartFooter title={"Start round 1/4"}
                    text="Starting from arms length, press play and then slowly bring device towards your nose. 
                    When it starts to feel uncomfortable or you see more than one dot click stop"
                    onclick={() => { setStatus(3) }} />
            </>
            break;
        case 3:
            return <>
                <div className={styles.button}>
                    < Button_w140_w383_Link text="Stop" onClick={() => { setStatus(4) }} />
                </div>
            </>
            break;
        case 4:
            return <>
                <StartFooter title={"Start round 2/4"}
                    text="Now while looking at the dot pull the device slowly away back to arms length.
                    When at arms length, click start to do another round "
                    onclick={() => { setStatus("") }} />
            </>
            break;
        default:
            break;
    }
}


export default ConvergesExercise