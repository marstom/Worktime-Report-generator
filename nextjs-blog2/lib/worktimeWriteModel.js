




// aggregate candidat
export const writeEntryToDay = async (database, id, date, descripton, time) => {
    const [year, month, day] = date.split('-')
    const saveToDayPath = `${year}/${year}/${month}/${day}`
    const entryPath = `/entrys/${id}`
    await database.saveData(saveToDayPath + entryPath, {descripton, time})
}


export default writeEntryToDay;

