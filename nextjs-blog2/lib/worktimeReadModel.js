// aggregate candidat
export const readEntryForDay = async (database, id, date) => {
  console.log("--------------------------");
  const [year, month, day] = date.split("-");
  const datePath = `/years/${year}/${month}/${day}`;
  const entryPath = `/entrys/${id}`;
  const data = await database.getData(datePath + entryPath);
  return data;
};
