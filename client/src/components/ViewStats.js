import React, { useState } from "react";
import API from "../utils/API";

const ViewStats = (props) => {

    const [playerState, setPlayerState] = useState({
        id: "",
        player: props.playerId,
        wins: ""
    })

    const showData = (evt) => {
        evt.preventDefault();
        API.getStats()
        .then(res => updateStats(playerState.player))
        .catch(err => console.log(err));
    }

    const updateStats = (player) => {
        API.getId({ player: player, wins: playerState.wins })
        .then(res => console.log(res))   
        .catch(err => console.log(err));
    }

    // const playerStats1 = () => {
    //     API.getPlayerStats({ player: props.playerId })
    //     .then(res => setPlayerState({ ...playerState, wins: res.wins }))
    // }
    // playerStats1();

    return (
        <div>
            <h3>Player Stats</h3>
            <p>Player Name {playerState.player}</p>
            <p>Wins {playerState.wins}</p>
            <button onClick={showData}>Data</button>
        </div>
    )
}

export default ViewStats;