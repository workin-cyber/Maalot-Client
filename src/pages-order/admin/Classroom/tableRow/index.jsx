import styles from './style.module.css'
import { ImPencil, ImBin } from "react-icons/im";
// Creator : Team A - yehoda
function AdminTableRow(props) {
    return <>

        <div className={styles.mainDiv}>
            <div className={styles.prpDiv}>
                <div className={styles.flex1}>
                    <span > {props.className} </span>
                </div>
                <div className={styles.flex1}>
                    <span className={styles.spans}>{props.classRoomId}</span>
                </div>
                <div className={styles.flex1} >
                    <span className={styles.spans}>{props.studentNum}</span>
                </div>
                <div className={`${styles.editDiv} ${styles.flex1}`}>
                    < button className={styles.Pen}><ImPencil /></button>
                    <button className={styles.Pen}><ImBin /></button>
                </div>
                {/* <span>{props.className || 'Action'}</span> */}
            </div>

        </div>

    </>
}


export default AdminTableRow