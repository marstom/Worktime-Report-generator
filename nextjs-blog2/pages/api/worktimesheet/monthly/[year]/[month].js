import { getTimeEntrysForDate } from "/lib/worktime";


export default async function handler(req, res) {
  const query = req.query
  const date = `${query.year}/${query.month}`
  res.status(200).json(await getTimeEntrysForDate(date));
}