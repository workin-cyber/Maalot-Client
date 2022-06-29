import styles from './style.module.css'
import Title from "../../../components/common/Title/Title"
import img from "./imag.svg"
import Book from "./Book.svg"
import hend from "./hend.svg"
import Zigzag from "./Zigzag.svg"
import DivCompicated from "../../../components/common/DivCompicated"
import Button_w140_w383_Link from "../../../components/common/Button w140-OR-w383 Link"

// Creator : Team2 - ari
function ResultSummary() {
    return <>
        <Title title="ResultSummary" />

        <img src={img} className={styles.margin} />
        <DivCompicated classAll={styles.margin2} >
            <div className={styles.group1}>
                {<img src={Book} className={styles.book} />}
                
                    {<h4 className={styles.title1}>
                        Reading Rate
                    </h4>}
                
                <div className={styles.title2}>
                    {<h1>120WPM
                        <br />
                        (+/-5)</h1>}
                </div>
            </div>
            {<img src={Zigzag} className={styles.zigzag} />}
            <div className={styles.group2}>
                {<img src={hend} className={styles.hend} />}

                {<h4 className={styles.title3}>Comprehension Score</h4>}

                <div className={styles.title4}>
                    {<h1>8/10</h1>}
                </div>
                    
              
            </div>
        </DivCompicated>
        {/* <div> */}
        {/* <DivCompicated classAll={styles.margin2} /> */}

        {/* </div> */}
        <div className={styles.margin}>
            < Button_w140_w383_Link />
        </div>


    </>
}


export default ResultSummary