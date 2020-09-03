import React from "react";
import "./style.css";

function PlayerOne(props) {
  <div>
    <card className="image" src="../images/Ghost.png">
      <h1> Username {props.players[0].player}</h1>
      <h4> Kills: {props.player[0].start_kills} </h4>
      <h4> Deaths: {props.player[0].start_deaths} </h4>
      <h4> Downs: {props.player[0].start_downs} </h4>
      <h4> Revives: {props.player[0].start_revives} </h4>
    </card>
  </div>;
}

export default PlayerOne;
