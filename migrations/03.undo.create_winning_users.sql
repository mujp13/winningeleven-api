ALTER TABLE winning_teams
  DROP COLUMN IF EXISTS user_id;

DROP TABLE IF EXISTS winning_users;
