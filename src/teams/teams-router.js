const express = require("express");
const path = require("path");
const TeamsService = require("./teams-service");
const { requireAuth } = require("../middleware/jwt-auth");

const TeamsRouter = express.Router();
const jsonParser = express.json();

TeamsRouter.use(requireAuth)
  .route("/")
  .get((req, res, next) => {
    TeamsService.getAllTeams(req.app.get("db"), req.user.id)
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

TeamsRouter.use(requireAuth)
  .route("/:team_id")
  .get((req, res, next) => {
    TeamsService.getTeamPlayers(req.app.get("db"), req.params.team_id)
      .then((teamplayer) => {
        TeamsService.getTeamById(req.app.get("db"), req.params.team_id).then(
          (team) => {
            res.json({ team: team[0], teamplayer });
          }
        );
      })
      .catch(next);
  });

module.exports = TeamsRouter;
