import { getTimeEntrysForDate, convertToApiContract } from "lib/worktime";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { unauthorized } from "lib/auth";
import initializeDatabase from "lib/prodDb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await initializeDatabase();
  // @ts-ignore
  if (unauthorized(req.session.user, res)) {
    return;
  }

  const query = req.query;
  const date = `${query.year}/${query.month}`;

  const rawJSONDatabaseData = await getTimeEntrysForDate(db, date);
  const response: any = convertToApiContract(
    rawJSONDatabaseData,
    // @ts-ignore
    query.month,
    query.year,
  );

  res.status(200).json({ ...response });
}

export default withIronSessionApiRoute(handler, sessionOptions);
