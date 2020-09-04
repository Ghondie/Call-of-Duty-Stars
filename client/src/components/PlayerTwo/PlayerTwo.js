import React from "react";
import "./style.css";
import Picture from "../../images/Price.jpg";

function PlayerTwo(props) {
  return (
    <div
      className="playerCard"
      style={{
        backgroundImage: `url(${Picture})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h1> {props.player2.player}</h1>
        <h4> Kills: {props.player2.start_kills} </h4>
        <h4> Deaths: {props.player2.start_deaths} </h4>
        <h4> Downs: {props.player2.start_downs} </h4>
        <h4> Revives: {props.player2.start_revives} </h4>
      </div>
    </div>
  );
}

export default PlayerTwo;
