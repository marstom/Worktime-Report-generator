// aggregate candidat
export const writeEntryToDay = async (
  database,
  id,
  date,
  description,
  time,
) => {
  const [year, month, day] = date.split("-");
  const saveToDayPath = `/years/${year}/${month}/${day}`;
  const entryPath = `/entrys/${id}`;
  await database.saveData(saveToDayPath + entryPath, { description, time });
};

export const deleteEntry = async (database, date, id) => {
  const [year, month, day] = date.split("-");
  const dayPath = `/years/${year}/${month}/${day}`;
  const entryPath = `${dayPath}/entrys/${id}`;
  await database.delete(entryPath);
};
