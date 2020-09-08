import axios from "axios";

export default {
  // Gets all usernames
  getUser: function() {
    return axios.get("/api/user");
  },
  authUser: function(userData) {
    return axios.post("/api/user/login", userData)
  },
  saveUser: function(userData) {
    return axios.post("/api/user/signup", userData)
  },
  matchUpdate: async function(matchId) {
    return await axios.put(`/api/cod/${matchId}`)
  },
  createMatch: async function(playerData) {
    return await axios.post("/api/cod", playerData)
  },
  // getId: function(playerData) {
  //   return axios.post("/api/cod/getId", playerData)
  // },
  // getPlayerStats: function(playerData) {
  //   return axios.get(`/api/cod/player/${playerData}`)
  // }
  getMatch: async function(player) {
    return await axios.get(`/api/cod/get/${player}`)
  }
};