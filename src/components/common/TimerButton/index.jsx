import styles from "./style.module.css";
import { BiPlay } from "react-icons/bi";
import { IoIosPause } from "react-icons/io";
import { ImPlus } from "react-icons/im";
import { ImMinus } from "react-icons/im";
import { BsStopFill } from "react-icons/bs";
import { useState } from "react";

// Creator : Team 4 - Amichai
function TimerButton({ state, fullStop, changeMoveTime }) {
  const [playPause, setPlayPause] = useState(true);

  const changeButton = () => {
    setPlayPause(!playPause);
    changeMoveTime();
  };
  return (
    <>
      {state === "+" ? (
        <button className={styles.allButton}>
          <ImPlus className={styles.plusIcon} />
        </button>
      ) : state === "-" ? (
        <button className={styles.allButton}>
          <ImMinus className={styles.minusIcon} />
        </button>
      ) : (
        <button
          onClick={changeButton}
          className={
            playPause
              ? `${styles.allButton} ${styles.playButton}`
              : `${styles.allButton} ${styles.pauseButton}`
          }
        >
          {playPause ? (
            <BiPlay size={30} className={styles.playIcon} />
          ) : fullStop ? (
            <IoIosPause className={styles.pauseIcon} size={20} />
          ) : (
            <BsStopFill size={25} className={styles.stopIcon} />
          )}
        </button>
      )}
    </>
  );
}
export default TimerButton;
