import styles from './style.module.css'
import Title from "../../../components/common/Title/Title"
import PopUp from "../../../components/common/PopUp"
import Button_w140_w383_Link from "../../../components/common/Button w140-OR-w383 Link"

// Creator : Team2 - ari

function Questions() {
    const questionlist = [
        `What is Lorem Ipsum?
Lorem Ipsum is simply dummying industry. Lorem Ipsum has`,
`What is Lorem Ipsum?
Lorem If the printing and typesetting industry. Lorem Ipsum has`,
`What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing as`,
`What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing a`
    
    ]
    return <>
        <Title title="Comprehension" />

        {questionlist.map(item =>
            <PopUp question={item} classAll={styles.margin} />
        )}
        <div className={styles.margin}>
        <Button_w140_w383_Link className={styles.margin}/>
        </div>
    </>
}


export default Questions