import { getTimeEntrysForDate } from "lib/worktime";
import { sessionOptions } from "lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { unauthorized } from "lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import initializeDatabase from "lib/prodDb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await initializeDatabase();
  // @ts-ignore
  if (unauthorized(req.session.user, res)) {
    return;
  }
  const query = req.query;
  // @ts-ignore
  res.status(200).json(db, await getTimeEntrysForDate(query.year));
}

export default withIronSessionApiRoute(handler, sessionOptions);
