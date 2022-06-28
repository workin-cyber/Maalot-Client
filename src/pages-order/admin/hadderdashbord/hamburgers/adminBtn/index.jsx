import { Link } from 'react-router-dom'
import styles from './style.module.css'
function AdminBtn(props) {
    return <>
        <Link
            to={'/' + props.title}>
            <div className={props.title == 'Dashboard' ? styles.mainBtnDash : styles.mainBtnClass}>
                <div className={props.title == 'Dashboard' ? styles.mainPicDash : styles.mainPicClass}></div>
                <span>{props.title}</span>
            </div>
        </Link>
    </>
}
export default AdminBtn