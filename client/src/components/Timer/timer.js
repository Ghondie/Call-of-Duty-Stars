import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./style.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};

const renderTime = (dimension, time) => {
    // console.log(time)
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = time => {
    // console.log(minuteSeconds - time / 1000)
   return (minuteSeconds - time / 1000) | 0;

}
const getTimeMinutes = time => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = time => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = time => (time / daySeconds) | 0;

const secondsLeft = (obj) =>{ 
    // console.log(obj)
    // return renderTime("seconds", getTimeSeconds(obj.elapsedTime))
    return renderTime("seconds", obj.remainingTime)
}
const minutesLeft = (obj) =>{
    // console.log(obj)
    return renderTime ("minutes", Math.floor(obj.remainingTime / minuteSeconds))
    // return renderTime ("minutes",getTimeMinutes(hourSeconds - obj.elapsedTime / 1000))
}
const hoursLeft = (obj) =>{
    // console.log(obj)
    return renderTime ("hours", Math.floor(obj.remainingTime / hourSeconds))
    // return renderTime ("minutes",getTimeMinutes(hourSeconds - obj.elapsedTime / 1000))
}


export default function Timer({ time }) {
    console.log(typeof time)
    const stratTime = time/ 1000; // use UNIX timestamp in seconds
//   const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
//   const endTime = stratTime + (time /60/60); // use UNIX timestamp in seconds
const endTime = stratTime + (12*hourSeconds); // use UNIX timestamp in seconds


  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="timer">
      {/* <CountdownCircleTimer
        {...timerProps}
        colors={[["#7E2E84"]]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime }) =>
          renderTime("days", getTimeDays(daysDuration - elapsedTime / 1000))
        }
      </CountdownCircleTimer> */}
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#D14081"]]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={totalElapsedTime => [
          remainingTime - totalElapsedTime > hourSeconds
        ]}
      >
        {hoursLeft}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#EF798A"]]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={totalElapsedTime => [
          remainingTime - totalElapsedTime > minuteSeconds
        ]}
      >
        {minutesLeft}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[["#218380"]]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={totalElapsedTime => [remainingTime - totalElapsedTime > 0]}
      >
        {secondsLeft }
      </CountdownCircleTimer>
    </div>
  );
}
