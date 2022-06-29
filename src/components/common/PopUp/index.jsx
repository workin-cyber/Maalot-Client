import { useState } from 'react'
import DivCompicated from '../DivCompicated'
import styles from './style.module.css'

// Creator : Team 5 - Nati Tuka
//  הסבר: דיב לשאלות
// בנוי על DivCompicated

// props:
//classInternal-לתת class לדיב הפנימי
//classAll- לתת class לדיב שמכיל את כל הדיבים בתוכו
//styleInsternal- style לדיב הפנימי
//title-להכניס כותרת לדיב
//classTitle - class לכותרת
//question - להכניס שאלה לדיב (סימן שאלה מובנה)
//classQuestion - class לשאלה
//classButtons - class לדיב שמכיל את שני הכפתורים
//classButtonYes- class לכפתור ה-כן
//classButtonNo- class לכפתור ה-לא
//yesFn - פונקציה התופעל בעת לחיצה על כפתור ה-כן (מקבלת אוטומטית את ה-event)
//noFn - פונקציה התופעל בעת לחיצה על כפתור ה-לא (מקבלת אוטומטית את ה-event)

function PopUp(props) {

    const [isClicked, setIsClicked] = useState("")

    return <DivCompicated classAll={props.classAll ?? ""} style={props.styleInsternal} isLeft={true} classInternal={`${styles.div} ${props.classInternal ?? ""}`}>
        <h1 className={`${styles.title} ${props.classTitle ?? ""}`}>{props.title}</h1>
        <h2 className={`${styles.question} ${props.classQuestion ?? ""}`}>{props.question}?</h2>
        <div className={`${styles.buttons} ${props.classButtons}`}>
            <button className={`${isClicked == "yes" ? styles.yesClicked : styles.noClicked} ${props.classButtonYes ?? ""}`} value={true} onClick={(e) => { setIsClicked("yes"); if (props.yesFn) props.yesFn(e) }}>Yes</button>
            <button className={`${isClicked == "no" ? styles.yesClicked : styles.noClicked} ${props.classButtonYes ?? ""}`} value={false} onClick={(e) => { setIsClicked("no"); if (props.noFn) props.noFn(e) }}>No</button>
        </div>
    </DivCompicated >
}



export default PopUp