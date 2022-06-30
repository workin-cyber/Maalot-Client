import { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button_w140_w383_Link from '../../../components/common/Button w140-OR-w383 Link'
import DivCompicated from '../../../components/common/DivCompicated'
import { MainContext } from '../../../context/MainContex'
import styles from './style.module.css'

// Creator : Team 5 -Netanel Levi, Nti Tuka, Nati Shenker
function ResultSummary(props) {

    const { setHeaderName, setPopUpContent } = useContext(MainContext)
    useEffect(() => {
        setHeaderName("Result Summary")
        // const obj = { title: "ddd", question: "aaa?", yesFn: () => { console.log("yesss") } }
        // setPopUpContent(obj)
    }, [])


    const location = useLocation()
    const navigate = useNavigate()
    const { focusArr } = location.state

    function average() {
        let sum = 0;
        focusArr.forEach(f => sum += f);
        return sum / focusArr.length

    }

    return <div className={styles.all}>
        <div className={styles.img}></div>
        <DivCompicated classAll={styles.Div} classInternal={styles.internal}>
            <div>
                <div className={styles.imgDiv}>
                    <div className={styles.smartphon}></div>
                    <div className={styles.line}></div>
                    <div className={styles.person}></div>
                </div>
                <h5 className={styles.h5}>Comfortable Distance</h5>
                <h2 className={styles.cm}>{focusArr ? average() : ""} CM</h2>
            </div>
        </DivCompicated>
        <div className={styles.button}>
            < Button_w140_w383_Link text="Done" onClick={() => { }} />
        </div>
    </div>
}


export default ResultSummary