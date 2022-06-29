import styles from './style.module.css'
import AdminTableRow from './tableRow'
import arr from './fakeData.json'
import DivCompicated from '../../../components/common/DivCompicated'
// Creator : Team 1 - Avi 
 // yuda work

function AdminTable(props) {
    let cnt = 0
    return <>
        <div className={`${styles.allFlexItem}${styles.bodyDiv}`}>
            <div className={styles.mainDiv}>
                <div className={styles.prpDiv}>
                    <span className={styles.allFlexItem}>class name</span>
                    <span className={styles.allFlexItem}>Classroom ID</span>
                    <span className={styles.allFlexItem}>Students</span>
                    <span className={styles.allFlexItem}>Action</span>
                </div>
            </div>
            {arr.map((v, i) => < DivCompicated isLeft={true} classInternal={styles.arrDiv}></DivCompicated>)}
        </div>

    </>
}


export default AdminTable