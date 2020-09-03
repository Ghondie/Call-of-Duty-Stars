import React, { useState } from "react";
import API from "../utils/API";

const ViewStats = ({stats}) => {

    const [playerState, setPlayerState] = useState(stats)

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
             <p>Player Name {stats.player}</p>
            <p>kills {playerState.start_kills}</p>
            <p>downs {playerState.start_downs}</p>
            <p>revives {playerState.start_revives}</p>
            <p>deaths {playerState.start_deaths}</p>
            {/* <button onClick={showData}>Data</button>  */}
           

        </div>
    )
}

export default ViewStats;