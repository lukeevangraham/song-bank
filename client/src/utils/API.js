import axios from "axios";

export default {
    // Gets all songs
    getSongs: function() {
        return axios.get("/api/songs");
    },
    // Saves a song to the database
    saveSong: function(songData) {
        return axios.post("/api/songs", songData);
    }
}