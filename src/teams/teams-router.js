const express = require("express");
const path = require("path");
const TeamsService = require("./teams-service");
const { requireAuth } = require("../middleware/jwt-auth");

const TeamsRouter = express.Router();
const jsonParser = express.json();

TeamsRouter.use(requireAuth)
  .route("/")
  .get((req, res, next) => {
    TeamsService.getAllContents(req.app.get("db"))
      .then((contents) => {
        res.json(contents);
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { team_name, players } = req.body;
    const newTeam = { team_name };
    newTeam.user_id = req.user.id;
    TeamsService.insertTeam(req.app.get("db"), newTeam, players)
      .then((team) => {
        res.status(201).json(team);
      })
      .catch(next);
  });

module.exports = TeamsRouter;
