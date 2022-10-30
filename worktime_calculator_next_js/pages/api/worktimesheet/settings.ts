import { loadedSettings } from "lib/settings";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "lib/session";
import { unauthorized } from "lib/auth";
import { withIronSessionApiRoute } from "iron-session/next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // @ts-ignore
  if (unauthorized(req.session.user, res)) {
    return;
  }
  res.status(200).json(await loadedSettings());
}

export default withIronSessionApiRoute(handler, sessionOptions);
