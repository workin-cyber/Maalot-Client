import Button_w140_w383_Link from '../../../components/common/Button w140-OR-w383 Link'
import DivCompicated from '../../../components/common/DivCompicated'
import styles from './style.module.css'
// Creator : Team 5 -Netanel Levi, Nti Tuka, Nati Shenker
function ResultSummary(props) {
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
                <h2 className={styles.cm}>{props.CM ?? ""} CM</h2>
            </div>
        </DivCompicated>
        <div className={styles.button}>
            < Button_w140_w383_Link text="Done" onClick={() => { }} />
        </div>
    </div>
}


export default ResultSummary