import styles from "./style.module.css";
import { ImPlay3 } from "react-icons/im";

// Creator : Team 2 - eliezer
function StartButton(props) {
  return (
    <div className={props.classButton ?? ""}>
      <button onClick={props.onclick} className={styles.TheButton}>
        <div className={styles.ImPlay3}>
          <ImPlay3 />
        </div>
      </button>
    </div>
  );
}

export default StartButton;
