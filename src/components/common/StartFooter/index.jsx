import styles from "./style.module.css";
import StartButton from "../ButtonStart";
import cone from "../StartFooter/Vector.svg";
import headphones from "../StartFooter/headphones.svg";
import camera from "../StartFooter/camera.svg";

// Creator : Team 2 - eliezer-kott

function StartFooter({ title, icon, text, onclick }) {
  return (
    <div>
      <div className={styles.aroundButton}>
        {<StartButton onclick={onclick} />}
      </div>
      <div className={styles.fatherDiv}>
        <p className={styles.text}>{title}</p>
        <div className={styles.childDiv}>
          <p className={styles.insideText}>{text}</p>
          <div className={styles.icon}>
            <img
              className={styles.cone}
              src={
                (icon = "headphones"
                  ? headphones
                  : (icon = "camera" ? camera : cone))
              }
              alt="coneIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartFooter;
