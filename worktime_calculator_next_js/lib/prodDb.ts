import { JSONDatabase } from "./database";
import { loadedSettings } from "./settings";

// TODO read settings
let settings: { [key: string]: string } = {};

let db: JSONDatabase;
try {
  console.log("loading settings....");
  settings = await loadedSettings();
  console.log("Loaded settings!");
} catch (error) {
  console.log("NOT loaded settings");
  console.error("Cannot load settings in given time...");
}

if (settings["activeDatabaseName"]) {
  // db = new JSONDatabase(process.env.JSON_DB);
  db = new JSONDatabase(settings["activeDatabaseName"]);
} else {
  throw new Error(
    "Please configure path to database i.e JSON_DB=./lib/db/timeEntrysDb.json",
  );
}

export default db;
