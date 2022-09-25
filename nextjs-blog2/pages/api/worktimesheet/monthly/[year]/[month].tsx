import { getTimeEntrysForDate, convertToApiContract } from "lib/worktime";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "lib/session";
import { withIronSessionApiRoute } from "iron-session/next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user;
  if (!user || user.isLoggedIn === false) {
    res.status(400).end();
    return;
  }

  const query = req.query;
  const date = `${query.year}/${query.month}`;

  const rawJSONDatabaseData = await getTimeEntrysForDate(date);
  const response: any = convertToApiContract(
    rawJSONDatabaseData,
    query.month,
    query.year,
  );

  res.status(200).json({ ...response });
}

export default withIronSessionApiRoute(handler, sessionOptions);
