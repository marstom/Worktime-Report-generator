import { JSONDatabase } from "./database";

export const settingsDb = new JSONDatabase("./lib/settings.json");

export const loadedSettings = async (): Promise<object> => {
  settingsDb.reload();
  return await settingsDb.getData("/");
};

export const getSetting = async (path: string): Promise<object> => {
  settingsDb.reload();
  return await settingsDb.getData(path);
};
