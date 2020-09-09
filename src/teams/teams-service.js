const xss = require("xss");

const TeamsService = {
  getAllTeam(db, user_id) {
    return db.select("*").from("winning_teams");
  },
  insertTeam(db, newTeam, players) {
    return db
      .insert(newTeam)
      .into("winning_teams")
      .returning("*")
      .then((rows) => {
        //return rows[0];
        return players.map((player) =>
          db
            .insert({
              team_id: rows[0].id,
              player_id: player.id,
            })
            .into("winning_team_players")
        );
      });
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
