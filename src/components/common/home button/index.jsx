import { Link } from 'react-router-dom'
import styles from './style.module.css'
import iconStudent from './img/Vector.svg'
import iconclass from './img/Group.svg'


// Creator : team 3 -  yoni
// for link send to=path
// default iconclass. for iconstudent send icon=true
//send  number=number

function SelectButton(props) {
    let text = props.icon ? "Students" : "Classrooms"
    return <>
        <Link className={styles.Link} to={props.to}>
            <div className={styles.button}>
                <div className={styles.main}>
                    <img src={props.icon ? iconStudent : iconclass} className={styles.icon} />
                    <div className={styles.title}>
                        <h3 className={styles.h3}>{props.number}</h3>
                        <div className={styles.text}>{text}</div>
                    </div>
                </div>
            </div>
        </Link>

    </>
}


export default SelectButton