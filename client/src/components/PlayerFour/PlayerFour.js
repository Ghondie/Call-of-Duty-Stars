import React from "react";
import "./style.css";

function PlayerFour(props) {
  <div>
    <card className="image" src="../images/Golem.png">
      <h1> Username {props.players[3].player}</h1>
      <h4> Kills: {props.player[3].start_kills} </h4>
      <h4> Deaths: {props.player[3].start_deaths} </h4>
      <h4> Downs: {props.player[3].start_downs} </h4>
      <h4> Revives: {props.player[3].start_revives} </h4>
    </card>
  </div>;
}

export default PlayerFour;
