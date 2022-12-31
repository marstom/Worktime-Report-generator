import { JSONDatabase } from "./database";

export const settingsDb = new JSONDatabase("./lib/settings.json");

export const loadedSettings = async (): Promise<{ [key: string]: string }> => {
  settingsDb.reload();
  return await settingsDb.getData("/");
};

export const getSetting = async (
  path: string,
): Promise<{ [key: string]: string }> => {
  settingsDb.reload();
  return await settingsDb.getData(path);
};
