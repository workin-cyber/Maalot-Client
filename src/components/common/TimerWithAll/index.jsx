import { useState } from "react";
import styles from "./style.module.css";
import Timer from "../Timer";
import Progressbar from "../Progressbar";
import TimerButton from "../TimerButton";
// Creator : Team 4 - yaakov goldMan
function TimerWithAll({ clockTime,className,href,children,state }) {
  const [seconds, setSeconds] = useState(180);
  const numberProgressbar = () => 20 - Math.floor(seconds / 9);
  return (
    <div>
      <div className={`${styles.all} ${className}`}>
        {!clockTime ? <TimerButton state="+" /> : null}
        <div className={styles.timer}>
          <Timer clockTime={clockTime} setSeconds={setSeconds} href={href} state={state} />
        </div>
        <Progressbar number={numberProgressbar()} />
        {!clockTime ? <TimerButton state="-" /> : null}
      </div>
      {children}
    </div>
  );
}
export default TimerWithAll;
