// import React from "react";
import styles from "./style.module.css";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import SpeedLimit from "../SpeedLimit";
import TimerButton from "../TimerButton/index";
// import Progressbar from "../Progressbar";
import { useNavigate } from 'react-router-dom'

// Creator : Team 4 - yaakov goldman

function Timer({ clockTime, setSeconds,href,state }) {
  const [timeMove, setTimeMove] = useState(true);
  const navigate = useNavigate()
  // const [corrent, setCorrent] = (0);

  function changeMoveTime() {
    setTimeMove(!timeMove);
  }

function changePage(numSecond){
  if(!numSecond)
  navigate(href,{state:{data:state}})
}

  function printTime(time) {
    const minute = Math.floor(time / 60),
      numberSecond = time % 60;
    let second;
    if (numberSecond) {
      if (numberSecond < 10) second = "0" + numberSecond;
      else second = numberSecond;
    } else second = "00";
    return `${minute}:${second}`;
  }

  return (
    <>
      {/* <div className={styles.watch}> */}
      <CountdownCircleTimer
        isPlaying={timeMove}
        duration={8}
        colors={"purple"}
        rotation={"counterclockwise"}
        strokeLinecap={"square"}
        size={220}
      >
        {({ remainingTime }) => {
          setSeconds(remainingTime);
          changePage(remainingTime)
          return (
            <div className={styles.insideTimer}>
              {clockTime ? (
                <h2 className={styles.numTimer}>{printTime(remainingTime)}</h2>
              ) : (
                <SpeedLimit numberLPM={10} />
              )}
              <TimerButton
                fullStop={clockTime}
                changeMoveTime={changeMoveTime}
              />
            </div>
          );
        }}
      </CountdownCircleTimer>
      {/* </div> */}
    </>
  );
}

export default Timer;
