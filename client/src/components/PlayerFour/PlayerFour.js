import React from "react";
import "./style.css";
import Picture from "../../images/Golem.jpg";

function PlayerFour(props) {
  return (
    <div>
      <div style={{ backgroundImage: `url(${Picture})` }}>
        <img src={Picture} />
        <h1> Username {props.player4.player}</h1>
        <h4> Kills: {props.player4.start_kills} </h4>
        <h4> Deaths: {props.player4.start_deaths} </h4>
        <h4> Downs: {props.player4.start_downs} </h4>
        <h4> Revives: {props.player4.start_revives} </h4>
      </div>
    </div>
  );
}

export default PlayerFour;
