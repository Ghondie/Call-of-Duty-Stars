import React from "react";
import "./play.css";
import { Link } from "react-router-dom";
// import Picture from "../../images/Golem.jpg";
import Colabs from "../Colabs/Colabs";
import Picture from "../../images/DemoGame.png";
import Header from "../Header/Header";

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
        <div>
            <Header />
            <div id="aboutContainer">
                <h1 id="demo-game">Demo Game</h1>
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
                        <li>Due to activisions servers update takes up to 15 minutes so be patient</li>
                    </ul>
                    <h1>How scoring works</h1>
                    <ul>
                        <li>Kills +1 Points</li>
                        <li>Deaths -1 Points </li>
                        <li>Downs +1 Points </li>
                        <li>Revives +1 Points </li>
                    </ul>
                    <Link to="/Play">
                        <button id="play" className="Play">
                            {" "}
                            Play
                        </button>
                    </Link>
                </container>
            </div>
        </div>
    );
}

export default Play;
