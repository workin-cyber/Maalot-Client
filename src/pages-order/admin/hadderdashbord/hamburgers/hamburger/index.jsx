import styles from './style.module.css'
import image1 from '../adminImg/image1.svg'
import AdminBtn from '../adminBtn/index'
// Creator : Team A - yuda akiva
function Hamburger() {
    return <>
        <div className={styles.mainDiv}>
            <div className={styles.picHolder}>
                <div className={styles.firstImg}></div>
                <div className={styles.secendImg}></div>
            </div>
            <AdminBtn title={'Dashboard'}/>
            <AdminBtn title={'Classrooms'}/>
        </div>
    </>
}


export default Hamburger