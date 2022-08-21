import { JsonDB } from "node-json-db";
import { Config } from "node-json-db/dist/lib/JsonDBConfig";

export const createConn = (name) => {
  const db = new JsonDB(new Config(name, true, false, "/"));
  return db;
};

// Abstraction
export class JSONDatabase {
  constructor(dbName) {
    this.db = new JsonDB(new Config(dbName, true, true, "/"));
  }

  async saveData(path, data) {
    await this.db.push(path, data);
  }

  async updateData(path, data) {
    await this.db.push(path, data, false);
  }

  async getData(path) {
    const data = await this.db.getData(path);
    return data;
  }

  async delete(path) {
    this.db.delete(path);
  }
}
