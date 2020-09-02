import React, { useState } from "react";
import ViewStats from "./ViewStats";
import API from "../utils/API";
import PlayerComponet from "./PlayerComponet";
import Header from "./Header";



const MainScreen = () => {
    const [developerState, setDeveloperState] = useState({
        playerId: "",
        showStats: false
      });
    
    const [playerState, setPlayerState] = useState({
        player: "",
        wins: ""
    });

    const handleFormChange = (evt) => {
        setDeveloperState({ ...developerState, playerId: evt.target.value })
    }
    
    const viewStatsBtn = evt => {
        evt.preventDefault();
        setDeveloperState({ ...developerState, showStats: true })
        playerStats();
    }

    const playerStats = () => {
        API.getPlayerStats(developerState.playerId)
        .then(res => console.log(res))
        // .then(res => setPlayerState({ player: developerState.playerId, wins: res.data.wins }))
    }
    


    if(!developerState.showStats)
    return (
        <div>
            <h1> Main Screen Homies!</h1>
            <form>
                <input onChange={evt => handleFormChange(evt)} placeholder={"MG2020#1853"} name={developerState.playerId} />
                <button onClick={viewStatsBtn}>View Stats</button>
            </form>
        </div>
    )

    return (     
     
        <div>
                <Header/>
            <h1> Main Screen Homies!</h1>
            <form>
                <input onChange={evt => handleFormChange(evt)} placeholder={"MG2020#1853"} name={developerState.playerId} />
                <button onClick={viewStatsBtn}>View Stats</button>
            </form>
            <ViewStats playerId={developerState.playerId} />
            <PlayerComponet/>
      

        </div>
        
    )

}

export default MainScreen;