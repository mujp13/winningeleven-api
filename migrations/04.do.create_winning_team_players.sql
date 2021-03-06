CREATE TABLE winning_team_players (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    team_id INTEGER REFERENCES winning_teams(id) ON DELETE SET NULL,
    player_id INTEGER REFERENCES winning_players(id) ON DELETE SET NULL
);