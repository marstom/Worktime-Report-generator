import { JSONDatabase } from "./database";

// aggregate candidat
export const readEntryForDay = async (
  database: JSONDatabase,
  id: string,
  date: string,
) => {
  const [year, month, day] = date.split("-");
  const datePath = `/years/${year}/${month}/${day}`;
  const entryPath = `/entrys/${id}`;
  const data = await database.getData(datePath + entryPath);
  return data;
};
