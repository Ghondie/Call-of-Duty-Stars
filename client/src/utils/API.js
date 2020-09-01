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
  getStats: function() {
    return axios.get("/api/stats")
  },
  saveStats: function(playerData) {
    return axios.post(`/api/stats/player/${playerData}`)
  },
  getId: function(playerData) {
    return axios.post("/api/stats/getId", playerData)
  },
  getPlayerStats: function(playerData) {
    return axios.get(`/api/stats/player/${playerData}`)
  }
};