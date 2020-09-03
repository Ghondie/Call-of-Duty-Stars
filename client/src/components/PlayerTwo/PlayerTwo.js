import React from "react";
import "./style.css";

function PlayerTwo(props) {
  <div>
    <card className="image" src="../images/Price.jpg">
      <h1> Username {props.players[1].player}</h1>
      <h4> Kills: {props.player[1].start_kills} </h4>
      <h4> Deaths: {props.player[1].start_deaths} </h4>
      <h4> Downs: {props.player[1].start_downs} </h4>
      <h4> Revives: {props.player[1].start_revives} </h4>
    </card>
  </div>;
}

export default PlayerTwo;
