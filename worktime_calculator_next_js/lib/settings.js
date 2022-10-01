import { JSONDatabase } from "./database";

export const settingsDb = new JSONDatabase("./lib/settings.json");

export const loadedSettings = async () => {
  settingsDb.reload();
  return await settingsDb.getData("/");
};

export const getSetting = async (path) => {
  settingsDb.reload();
  return await settingsDb.getData(path);
};
