import { withIronSessionApiRoute } from "iron-session/next";
import { unauthorized } from "lib/auth";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";

//  http.ServerResponse
async function handler(req: NextApiRequest, res: NextApiResponse) {
  // @ts-ignore
  if (unauthorized(req.session.user, res)) {
    return;
  }
  setTimeout(() => res.status(200).json({ text: "Hello" }), 1000);
}

export default withIronSessionApiRoute(handler, sessionOptions);
