
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'



export const createConn = (name) => {
    const db = new JsonDB(new Config(name, true, false, '/'));
    return db
}



