import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";

type DbEntry = any;

export const createConn = (name: string) => {
  const db = new JsonDB(new Config(name, true, false, "/"));
  return db;
};

// Abstraction
export class JSONDatabase {
  db: JsonDB;

  constructor(dbName: string) {
    this.db = new JsonDB(new Config(dbName, true, true, "/"));
  }

  async saveData(path: string, data: DbEntry) {
    await this.db.push(path, data);
  }

  async updateData(path: string, data: DbEntry) {
    await this.db.push(path, data, false);
  }

  async getData(path: string) {
    try {
      const data = await this.db.getData(path);
      return data;
    } catch (error) {
      console.log("The data was empty, created new one entry...");
      console.log(error);
      const data = {};
      return data;
    }
    // return data;
  }

  async delete(path: string) {
    this.db.delete(path);
  }
  async reload() {
    this.db.reload();
  }
}
