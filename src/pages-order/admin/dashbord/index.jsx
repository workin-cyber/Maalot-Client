import SelectButton from '../../../components/common/home button'
import HadderDashbord from '../hadderdashbord'
import styles from './stayle.module.css'



// Creator : Team1 - politi

function Dashbord(props){
    return <>
    <HadderDashbord />
    <div className={styles.divMain}>
    <SelectButton to={"/test"} number={props.classrooms ||120}/>
    <SelectButton to={"/test"} number={props.tudents || 1542} icon={true}/>
    </div>
    </>
}


export default Dashbord