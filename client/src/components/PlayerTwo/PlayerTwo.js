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
				<h1>{props.player2.player}</h1>
				<h4> Kills: {props.player2.kills} </h4>
				<h4> Deaths: {props.player2.deaths} </h4>
				<h4> Downs: {props.player2.downs} </h4>
				<h4> Revives: {props.player2.revives} </h4>
				<h4> Points: {props.player2.points} </h4>
			</div>
		</div>
	);
}

export default PlayerTwo;
