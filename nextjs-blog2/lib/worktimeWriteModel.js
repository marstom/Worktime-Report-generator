const zeroPad = (num, places) => String(num).padStart(places, "0");

// aggregate candidat
export const writeEntryToDay = async (
  database,
  id,
  date,
  description,
  time,
) => {
  const [year, month, day] = date.split("-");
  const saveToDayPath = `/years/${year}/${month}/${parseInt(day)}`;
  const entryPath = `/entrys/${id}`;
  const [hh, mm] = time.split(":");
  time = `${zeroPad(hh, 2)}:${zeroPad(mm, 2)}`;

  await database.saveData(saveToDayPath + entryPath, { description, time });
};

export const deleteEntry = async (database, date, id) => {
  const [year, month, day] = date.split("-");
  const dayPath = `/years/${year}/${month}/${day}`;
  const entryPath = `${dayPath}/entrys/${id}`;
  await database.delete(entryPath);
};
