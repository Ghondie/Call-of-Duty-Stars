import React from "react";
import "./style.css";

function PlayerThree(props) {
  <div>
    <card className="image" src="../images/Velikan.png">
      <h1> Username {props.players[2].player}</h1>
      <h4> Kills: {props.player[2].start_kills} </h4>
      <h4> Deaths: {props.player[2].start_deaths} </h4>
      <h4> Downs: {props.player[2].start_downs} </h4>
      <h4> Revives: {props.player[2].start_revives} </h4>
    </card>
  </div>;
}

export default PlayerThree;
