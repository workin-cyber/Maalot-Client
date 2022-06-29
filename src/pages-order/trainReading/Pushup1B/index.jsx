import { useState } from "react";
import Progressbar from "../../../components/common/Progressbar";
import Timer from "../../../components/common/Timer";
import styles from "./style.module.css";

// Creator : Team 4 - yaakov goldman
function Pushup1B() {
  const [seconds, setSeconds] = useState(180);
  // const [lengthDiv]

  const numberProgressbar = () => 20 - Math.floor(seconds / 9);
  return (
    <>
      <div className={styles.timer}>
        <Timer clockTime={true} setSeconds={setSeconds} />
      </div>
      <Progressbar number={numberProgressbar()} />
    </>
  );
}

export default Pushup1B;
