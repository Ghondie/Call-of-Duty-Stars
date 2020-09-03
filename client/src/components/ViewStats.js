import React, { useState, useEffect } from "react";
import API from "../utils/API";

const ViewStats = (props) => {

    console.log("ayo props check: " + props.player1.player)
    const [playerState, setPlayerState] = useState({
        matchId: props.matchId,
        player1: props.player1.player,
        player2: props.player2.player,
        player3: props.player3.player,
        player4: props.player4.player
    })

    const [statsState, setStatsState] = useState({
        player1: "",
        player2: "",
        player3: "",
        player4: ""
    })

    const showData = (evt) => {
        evt.preventDefault();
        // pullName()
        API.getMatch(playerState.matchId)
        .then((result) => setStatsState({ player1: result.data.players[0], player2: result.data.players[1], player3: result.data.players[2], player4: result.data.players[3] }))
        .catch(err => console.log(err));
    }

  

    return (

        <div>
            View Stats
            <button onClick={(evt) => showData(evt)}> Data </button>

            <p> Player name: {statsState.player1.player}</p>
            <p> Kills: {statsState.player1.start_kills}</p>
            <p> Deaths: {statsState.player1.start_deaths}</p>
        </div>
    )
}

export default ViewStats;