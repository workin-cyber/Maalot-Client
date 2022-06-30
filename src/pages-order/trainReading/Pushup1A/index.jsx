import StartFooter from "../../../components/common/StartFooter";
import styles from "./style.module.css";
import { useNavigate, useLocation } from "react-router-dom";

// Creator : Team 4 - yaakov goldman
function Pushup1A() {
  const navigate = useNavigate();
  const location = useLocation();
  // debugger
  console.log(location.state.data);

  function navigatePage() {
    // debugger;
    const data = location.state.data;
    const length = data.arrAnswer.length;
    if (length < 3) return "/student/trainreading/Pushup1B";
    if (length === 3) return "/student/trainreading/Pushup4B";
    if (length > 3) return "/student/level-exercise";
  }

  return (
    <>
      <div className={styles.img}></div>
      <div className={styles.divBottom}>
        <StartFooter
          onclick={() =>
            navigate(navigatePage(), { state: { data: location.state.data } })
          }
          text={
            <>
              <h5>With your headphones on,</h5>
              <p>
                Continue reading xxxxxxx book at the pace of the sound, for the
                next 3 minutes – we will notify you when time is up.
              </p>
            </>
          }
        />
      </div>
    </>
  );
}

export default Pushup1A;
