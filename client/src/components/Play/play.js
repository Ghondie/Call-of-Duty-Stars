import React from "react";
import "./play.css";
// import Picture from "../../images/Golem.jpg";
import Colabs from "../Colabs/Colabs";
import Picture from "../../images/DemoGame.png";

function Play(props) {
	return (
		//   <div
		//     className="playerCard"
		//     style={{
		//       backgroundImage: `url(${Picture})`,
		//       backgroundSize: "100% 100%",
		//       backgroundRepeat: "no-repeat",
		//     }}
		//   >

		<div id="aboutContainer">
			<container
				id="Colab"
				className="playerCard"
				style={{
					backgroundImage: `url(${Picture})`,
					backgroundSize: "100% 100%",
					backgroundRepeat: "no-repeat",
				}}
			>
				{/* <h1>Meet the team</h1> */}
				{/* <Colabs /> */}
			</container>
			<container id="Abouts">
				<h1>How to play</h1>
				<ul>
					<li>Enter your partys battletag</li>
					<li>Play warzone</li>
					<li>Update your score when you are out of the game</li>
					<li>Due to activisions servers update take a minute so be patient</li>
				</ul>
				<h1>How scoring works</h1>
				<ul>
					<li>Kills +1 Points</li>
					<li>Deaths -1 Points </li>
					<li>Downs +1 Points </li>
					<li>Revives +1 Points </li>
				</ul>
			</container>
		</div>
	);
}

export default Play;
