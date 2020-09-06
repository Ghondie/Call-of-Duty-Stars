import React, { useState, useEffect } from "react";
import ViewStats from "./ViewStats";
import API from "../utils/API";
import PlayerComponet from "./PlayerComponet";
import Header from "./Header";

const MainScreen = () => {
  const [playerStatsState, setPlayerStatsState] = useState({
    submit: false,
    matchId: "",
    player1: "",
    player2: "",
    player3: "",
    player4: "",
  });

  const [stateState, setStateState] = useState(false);

  const [playerState, setPlayerState] = useState({
    player1: "",
    player2: "",
    player3: "",
    player4: "",
  });

  const handleFormChange = (evt) => {
    setPlayerState({
      ...playerState,
      [evt.target.dataset.id]: evt.target.value,
    });
    // console.log(playerState)
  };

  const onSubmit = async (evt) => {
    // evt.preventDefault();
    // setDeveloperState({ ...developerState, showStats: true })
    // playerStats();
    const players = Object.values(playerState).filter((p) => p !== "");
    const response = await API.createMatch(players);
    console.log("<------------ " + playerState.player4 + " ------------->");
    setPlayerStatsState({
      submit: true,
      matchId: response.data._id,
      player1: response.data.players[0] || "",
      player2: response.data.players[1] || "",
      player3: response.data.players[2] || "",
      player4: response.data.players[3] || "",
    });
  };
  useEffect(() => {
    if (playerStatsState) {
      console.log(playerStatsState);
    }
  }, [playerStatsState]);

  // const playerStats = () => {
  //     API.getPlayerStats(developerState.playerId)
  //     .then(res => console.log(res))
  //     // .then(res => setPlayerState({ player: developerState.playerId, wins: res.data.wins }))
  // }

  if (!playerStatsState.submit) {
    return (
      <div>
        <Header />
        <h1> Main Screen Homies!</h1>
        <form onSubmit={onSubmit}>
          <input
            onChange={(evt) => handleFormChange(evt)}
            data-id="player1"
            placeholder={"MG2020#1853"}
            name={playerState.player1}
          />
          {/* <button onClick={viewStatsBtn}>View Stats</button> */}
          <input
            onChange={(evt) => handleFormChange(evt)}
            data-id="player2"
            placeholder={"MG2020#1853"}
            name={playerState.player2}
          />
          {/* <button onClick={viewStatsBtn}>View Stats</button> */}
          <input
            onChange={(evt) => handleFormChange(evt)}
            data-id="player3"
            placeholder={"MG2020#1853"}
            name={playerState.player3}
          />
          {/* <button onClick={viewStatsBtn}>View Stats</button> */}
          <input
            onChange={(evt) => handleFormChange(evt)}
            data-id="player4"
            placeholder={"MG2020#1853"}
            name={playerState.player4}
          />
          {/* <button type="submit">Submit</button> */}
          <button type="button" onClick={onSubmit}>
            Submit
          </button>
        </form>
        {/* {useEffect(()=>{playerStatsState.map((player,i)=>(
                    <ViewStats stats={playerStatsState}key={i} /> */}
        {/* {useEffect(()=>{
                    playerStatsState.map((player,i)=>(
                        <ViewStats stats={player}key={i} />   
                    ))
                },[playerStatsState]) */}
        {/* } */}
        {/* <PlayerComponet/> */}
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <h1> Main Screen Homies!</h1>
        <form onSubmit={onSubmit}>
          <input
            onChange={(evt) => handleFormChange(evt)}
            data-id="player1"
            placeholder={"MG2020#1853"}
            name={playerState.player1}
          />
          {/* <button onClick={viewStatsBtn}>View Stats</button> */}
          <input
            onChange={(evt) => handleFormChange(evt)}
            data-id="player2"
            placeholder={"MG2020#1853"}
            name={playerState.player2}
          />
          {/* <button onClick={viewStatsBtn}>View Stats</button> */}
          <input
            onChange={(evt) => handleFormChange(evt)}
            data-id="player3"
            placeholder={"MG2020#1853"}
            name={playerState.player3}
          />
          {/* <button onClick={viewStatsBtn}>View Stats</button> */}
          <input
            onChange={(evt) => handleFormChange(evt)}
            data-id="player4"
            placeholder={"MG2020#1853"}
            name={playerState.player4}
          />
          {/* <button type="submit">Submit</button> */}
          <button type="button" onClick={onSubmit}>
            Submit
          </button>
        </form>
        <ViewStats
          matchId={playerStatsState.matchId}
          player1={playerStatsState.player1}
          player2={playerStatsState.player2}
          player3={playerStatsState.player3}
          player4={playerStatsState.player4}
        />
      </div>
    );
  }
};

// if(!developerState.showStats)
// return (
//     <div>
//         <h1> Main Screen Homies!</h1>
//         <form>
//             <input onChange={evt => handleFormChange(evt)} placeholder={"MG2020#1853"} name={developerState.playerId} />
//             {/* <button onClick={viewStatsBtn}>View Stats</button> */}
//             <input onChange={evt => handleFormChange(evt)} placeholder={"Ghondie#1663"} name={developerState.playerId} />
//             {/* <button onClick={viewStatsBtn}>View Stats</button> */}
//             <input onChange={evt => handleFormChange(evt)} placeholder={"MG2020#1853"} name={developerState.playerId} />
//             {/* <button onClick={viewStatsBtn}>View Stats</button> */}
//             <input onChange={evt => handleFormChange(evt)} placeholder={"MG2020#1853"} name={developerState.playerId} />
// <button onClick={viewStatsBtn}>View Stats</button>
//         </form>
//     </div>
// )
export default MainScreen;
