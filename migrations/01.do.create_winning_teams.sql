CREATE TABLE winning_teams (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    team_name TEXT NOT NULL,
    date_created TIMESTAMP DEFAULT now() NOT NULL
);