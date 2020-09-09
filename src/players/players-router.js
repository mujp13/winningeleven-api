const express = require("express");
const path = require("path");
const PlayersService = require("./players-service");
const { requireAuth } = require("../middleware/jwt-auth");

const playersRouter = express.Router();

playersRouter.route("/").get((req, res, next) => {
  PlayersService.getAllContents(req.app.get("db"))
    .then((contents) => {
      res.json(contents);
    })
    .catch(next);
});

module.exports = playersRouter;
