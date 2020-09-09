const xss = require("xss");

const PlayersService = {
  getAllContents(knex) {
    return knex.select("*").from("winning_players");
  },
};

module.exports = PlayersService;
