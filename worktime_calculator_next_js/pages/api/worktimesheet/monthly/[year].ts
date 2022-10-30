import { getTimeEntrysForDate } from "lib/worktime";
import { sessionOptions } from "lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { unauthorized } from "lib/auth";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // @ts-ignore
  if (unauthorized(req.session.user, res)) {
    return;
  }
  const query = req.query;
  // @ts-ignore
  res.status(200).json(await getTimeEntrysForDate(query.year));
}

export default withIronSessionApiRoute(handler, sessionOptions);
