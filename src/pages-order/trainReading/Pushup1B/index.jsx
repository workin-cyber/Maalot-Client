import TimerWithAll from "../../../components/common/TimerWithAll";
import styles from "./style.module.css";
import { useNavigate, useLocation } from "react-router-dom";

// Creator : Team 4 - yaakov goldman
function Pushup1B() {
  const location = useLocation();
  return (
    <>
      <TimerWithAll
        clockTime={true}
        href={"/student/trainReading/Questions"}
        state={location.state.data}
      />
    </>
  );
}

export default Pushup1B;
