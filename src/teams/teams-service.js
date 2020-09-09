const xss = require("xss");

const TeamsService = {
  getAllTeams(db, user_id) {
    return db.select("*").from("winning_teams").where("user_id", user_id);
  },
  insertTeam(db, newTeam, players) {
    return db
      .insert(newTeam)
      .into("winning_teams")
      .returning("*")
      .then((rows) => {
        players.map((player) => {
          db.insert({
            team_id: rows[0].id,
            player_id: player.id,
          })
            .into("winning_team_players")
            .catch(console.log);
          console.log(rows[0].id);
          console.log(player.id);
        });
        return rows[0];
      });
  },
  getTeamPlayers(db, team_id) {
    return db
      .select("*")
      .from("winning_team_players")
      .join(
        "winning_players",
        "winning_team_players.player_id",
        "=",
        "winning_players.id"
      )
      .where("team_id", team_id);
  },
  getTeamById(db, team_id) {
    return db.select("*").from("winning_teams").where("id", team_id);
  },
};

//   serializeArticle(article) {
//     const { author } = article
//     return {
//       id: article.id,
//       style: article.style,
//       title: xss(article.title),
//       content: xss(article.content),
//       date_created: new Date(article.date_created),
//       number_of_comments: Number(article.number_of_comments) || 0,
//       author: {
//         id: author.id,
//         user_name: author.user_name,
//         full_name: author.full_name,
//         nickname: author.nickname,
//         date_created: new Date(author.date_created),
//         date_modified: new Date(author.date_modified) || null
//       },
//     }
//   },

//   serializeArticleComment(comment) {
//     const { user } = comment
//     return {
//       id: comment.id,
//       article_id: comment.article_id,
//       text: xss(comment.text),
//       date_created: new Date(comment.date_created),
//       user: {
//         id: user.id,
//         user_name: user.user_name,
//         full_name: user.full_name,
//         nickname: user.nickname,
//         date_created: new Date(user.date_created),
//         date_modified: new Date(user.date_modified) || null
//       },
//     }
//   },
// }

module.exports = TeamsService;
