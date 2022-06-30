import styles from "./style.module.css";
import DivCompicated from "../../../components/common/DivCompicated";
import Button_w140_w383_Link from "../../../components/common/Button w140-OR-w383 Link";
import { useNavigate, useLocation } from "react-router-dom";

// Creator : Team 4 - yaakov goldman
function ReadingRate() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.data;

  function changeLPM(whatToDo) {
    if (whatToDo === "+") data.lpm += 2;
    if (whatToDo === "-") data.lpm -= 2;
  }

  function onClick2(href, whatToDo) {
    changeLPM(whatToDo);
    navigate(href, { state: { data } });
  }

  return (
    <>
      <DivCompicated classAll={styles.bigDiv} classInternal={styles.div} isLeft>
        <p>How was that reading rate?</p>
        <div className={styles.divAll}>
          <div className={styles.btn}>
            <Button_w140_w383_Link text="just Right" onClick={()=> onClick2("/student/trainReading/Questions")} />
          </div>
          <div className={styles.btn}>
            <Button_w140_w383_Link white={true} text="Too Fast" onClick={()=> onClick2("/student/level-exercise","-")} />
          </div>
          <div className={styles.btn}>
            <Button_w140_w383_Link white={true} text="Too Slow" onClick={()=> onClick2("/student/level-exercise","+")} />
          </div>
        </div>
      </DivCompicated>
    </>
  );
}
export default ReadingRate;
