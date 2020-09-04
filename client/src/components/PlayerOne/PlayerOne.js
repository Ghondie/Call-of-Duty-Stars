import React from "react";
import "./style.css";
import Picture from "../../images/Ghost.png";

function PlayerOne(props) {
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
        <h1>{props.player1.player}</h1>
        <h4> Kills: {props.player1.start_kills} </h4>
        <h4> Deaths: {props.player1.start_deaths} </h4>
        <h4> Downs: {props.player1.start_downs} </h4>
        <h4> Revives: {props.player1.start_revives} </h4>
      </div>
    </div>
  );
}

export default PlayerOne;
