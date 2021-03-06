const router = require('express').Router();
const songsController = require("../../controllers/songsController");

// Matches with "/api/songs"
router.route("/").get(songsController.findAll).post(songsController.create)

module.exports = router;