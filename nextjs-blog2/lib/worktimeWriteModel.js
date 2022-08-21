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

export default writeEntryToDay;
