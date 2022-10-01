import { sessionOptions } from "lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { unauthorized } from "lib/auth";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (unauthorized(req.session.user, res)) {
    return;
  }
  const email = req.body.email;
  console.log("User sent: ", email);
  return res.status(200).json({ status: "is ok" });
}

export default withIronSessionApiRoute(handler, sessionOptions);
