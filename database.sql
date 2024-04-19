-- These two lines make it so that every single SQL query in
-- this file can be ran all at once to "reset" the database:
DROP TRIGGER IF EXISTS "on_team_crud_update" ON "team_crud";
DROP TABLE IF EXISTS "team_crud";

-- Table Schema Template:
CREATE TABLE "team_crud" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(500) NOT NULL,
  "is_nifty" BOOLEAN,
  "inserted_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Seed Data Template:
INSERT INTO "team_crud"
  ("name", "is_nifty")
  VALUES
  ('Gizmo', true),
  ('Gadget', true),
  ('Bits', true),
  ('Bobs', false);
  
-- Creates a trigger that handles the updated_at magic:
  -- https://x-team.com/blog/automatic-timestamps-with-postgresql/
CREATE OR REPLACE FUNCTION set_updated_at_to_now()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_team_crud_update
BEFORE UPDATE ON "team_crud"
FOR EACH ROW
EXECUTE PROCEDURE set_updated_at_to_now();
