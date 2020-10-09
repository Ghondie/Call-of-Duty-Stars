import React from "react";
import "./style.css";
import Picture from "../../images/Velikan.png";

function PlayerThree(props) {
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
				<h1> {props.player3.player}</h1>
				<h4> Kills: {props.player3.kills} </h4>
				<h4> Deaths: {props.player3.deaths} </h4>
				<h4> Downs: {props.player3.downs} </h4>
				<h4> Revives: {props.player3.revives} </h4>
				<h4> Points: {props.player3.points} </h4>
			</div>
		</div>
	);
}

export default PlayerThree;
