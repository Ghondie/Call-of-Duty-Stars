import React from "react";
import "./style.css";
import Picture from "../../images/Velikan.png";

function PlayerThree(props) {
  return (
    <div>
      <div style={{ backgroundImage: `url(${Picture})` }}>
        <img src={Picture} />
        <h1> Username {props.player3.player}</h1>
        <h4> Kills: {props.player3.start_kills} </h4>
        <h4> Deaths: {props.player3.start_deaths} </h4>
        <h4> Downs: {props.player3.start_downs} </h4>
        <h4> Revives: {props.player3.start_revives} </h4>
      </div>
    </div>
  );
}

export default PlayerThree;
