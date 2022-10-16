import { JSONDatabase } from "./database";

let db;

if (process.env.JSON_DB) {
  db = new JSONDatabase(process.env.JSON_DB);
} else {
  throw new Error(
    "Please configure path to database i.e JSON_DB=./lib/db/timeEntrysDb.json",
  );
}

export default db;
