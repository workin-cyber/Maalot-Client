import Button_w140_w383_Link from "../../../components/common/Button w140-OR-w383 Link";
import TimerWithAll from "../../../components/common/TimerWithAll";
import styles from "./style.module.css";
import { useNavigate, useLocation } from "react-router-dom";

// Creator : Team 4 - yaakov goldman
function Pushup4B() {
  const navigate = useNavigate();
  const location = useLocation();
  const data=location.state.data;
  const changeLPM=()=>{
    debugger
    data.lpm=12
 navigate("/student/trainReading/Questions",{state:{data}}) 
  }
  return (
    <>
    <p>Stop when you feel that the pace is just right for you.</p>
      <TimerWithAll state={data} href="/student/trainReading/Questions" clockTime={true} >
        <Button_w140_w383_Link
          text="Stop"
          // href="/student/trainReading/Questions"
          onClick={changeLPM}
        />
      </TimerWithAll>
    </>
  );
}

export default Pushup4B;
