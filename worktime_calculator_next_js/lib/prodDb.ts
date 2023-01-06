import { JSONDatabase } from "./database";
import { loadedSettings } from "./settings";

const initializeDatabase = async () => {
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
    db = new JSONDatabase(settings["activeDatabaseName"]);
  } else {
    throw new Error(
      'Please configure path to database in settings.json i.e. "activeDatabaseName": "./lib/db/FROM_settigs.json"',
    );
  }
  return db;
};

export default initializeDatabase;
