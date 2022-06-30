import { useContext, useState } from "react"
import { MainContext } from "../../../context/MainContex"
import DivCompicated from "../../common/DivCompicated"
import styles from "./style.module.css"



export default function Popup(props) {
    const { popUpContent } = useContext(MainContext)

    const [isClicked, setIsClicked] = useState("")

    return <div>
        <div onClick={() => { }} className={styles.bigDiv}></div>
        <DivCompicated classAll={styles.divCom} styleBack={{ opacity: "400", transform: "rotate(358deg)" }} styleInsternal={{ backgroundColor: "#FFFFFF", opacity: "100", transform: "rotate(2deg)", padding: "20px", paddingLeft: "10px", paddingRight: "10px" }}>
            <h2 className={`${styles.title} ${props.classTitle ?? ""}`}>{popUpContent.title}</h2>
            <h3 className={`${styles.question} ${props.classQuestion ?? ""}`}>{popUpContent.question}</h3>
            <div className={`${styles.buttons} ${props.classButtons}`}>
                <button className={`${isClicked == "yes" ? styles.yesClicked : styles.noClicked} ${props.classButtonYes ?? ""}`} value={true} onClick={(e) => { setIsClicked("yes"); if (popUpContent.yesFn) popUpContent.yesFn(e) }} id={props.id}>Yes</button>
                <button className={`${isClicked == "no" ? styles.yesClicked : styles.noClicked} ${props.classButtonYes ?? ""}`} value={false} onClick={(e) => { setIsClicked("no"); if (popUpContent.noFn) popUpContent.noFn(e) }} id={props.id}>No</button>
            </div>
        </DivCompicated>
    </div>
}
