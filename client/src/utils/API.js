import axios from "axios";

export default {
    // Saves a song to the database
    saveSong: function(songData) {
        return axios.post("/api/songs", songData);
    }
}