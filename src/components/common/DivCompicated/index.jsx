import styles from './style.module.css'

// Creator : Team 5 - Netanel Levi
//הסבר: דיב חיצוני לרקע-ודיב פנימי לכיתוב, שמותאמים לטקסטים

//props:
// isLeft:boolian-לשינוי הנטייה לצד שמאל, ברירת מחדל:צד ימין
//styleBack-CSS לדיב האחורי
//stylrInternal-CSS לדיב הפנימי
//classAll- לתת class לדיב שמכיל את כל הדיבים בתוכו
//classBack-הוספת calass לדיב האחורי
//classInternal-הוספת class לדיב הפנימי

//יש לרשום עם תווית פתוחה וסגורה ומה שיופיע בפנים ייכנס בתוך הדיב

function DivCompicated(props) {
    return (<div className={`${styles.all ?? ""} ${props.classAll ?? ""}`} style={props.styleAll}>
        <div style={props.styleBack} className={`${styles.backDiv} ${props.isLeft ? styles.left : styles.right} ${props.classBack ?? ""}`}>
            <div style={props.styleInsternal} className={`${styles.internalDiv} ${props.isLeft ? styles.left : styles.right} ${props.classInternal ?? ""} `}>

                {props.children}

            </div>
        </div >
    </div>)
}


export default DivCompicated