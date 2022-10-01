import { getTimeEntrysForDate, convertToApiContract } from "lib/worktime";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { unauthorized } from "lib/auth";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (unauthorized(req.session.user, res)) {
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
