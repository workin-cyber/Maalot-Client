import styles from "./style.module.css"
import { useNavigate } from "react-router-dom";

export default function Nav(props) {
    const navigate = useNavigate()

    return <div>
        <div onClick={() => { props.setIsNavClosed(true); setTimeout(() => props.setIsNav(false), 500) }} className={styles.bigDiv}>
        </div>
        <aside className={!props.isNavClosed ? styles.navAside : `${styles.navAside} ${styles.navAsideOut}`}>
            <div className={styles.logo}></div>
            <div className={styles.close} onClick={() => { props.setIsNavClosed(true); setTimeout(() => props.setIsNav(false), 500) }}></div>
            <div onClick={() => { navigate("/student/dashboard") }} className={`${styles.navDivBar} ${styles.dashbord}`}>
                <div className={styles.dashbordImg}></div>
                <h4>Dashbord</h4>
            </div>
            <div onClick={() => { navigate("/student/setting") }} className={`${styles.navDivBar} ${styles.setting}`}>
                <div className={styles.settingImg}></div>
                <h4>Settings</h4>
            </div><div className={`${styles.navDivBar} ${styles.contactUs}`}>
                <div className={styles.contactUsImg}></div>
                <h4>Contact Us</h4>
            </div><div className={`${styles.navDivBar} ${styles.signOut}`}>
                <div className={styles.singOutImg}></div>
                <h4>Sign Out</h4>
            </div>
        </aside>
    </div>
}
