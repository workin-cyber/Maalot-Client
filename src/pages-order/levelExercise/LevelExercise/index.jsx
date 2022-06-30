import SpeedLimit from '../../../components/common/SpeedLimit'
import TimerWithAll from '../../../components/common/TimerWithAll'
import styles from './style.module.css'
import { useNavigate, useLocation } from "react-router-dom";

// import Timer from '../../../components/common/Timer'


// Creator : Team 4 - yaakov goldman 
function LevelExercise(){
    const navigate = useNavigate();
    const location = useLocation();
    return <>
    <TimerWithAll clockTime={true} href="/student/level-exercise/ReadingRate" state={location.state.data}>
<SpeedLimit numberLPM={location.state.data.lpm} />
    </TimerWithAll>
    </>
}


export default LevelExercise