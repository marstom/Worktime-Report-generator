import { getTimeEntrysForDate, convertToApiContract } from "/lib/worktime";


export default async function handler(req, res) {
  const query = req.query
  const date = `${query.year}/${query.month}`

  const rawJSONDatabaseData = await getTimeEntrysForDate(date);
  const response = convertToApiContract(rawJSONDatabaseData, query.month, query.year)

  res.status(200).json(response);
}