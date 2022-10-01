import { getSortedPostsData } from "lib/posts";
import { withIronSessionApiRoute } from "iron-session/next";
import { unauthorized } from "lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "lib/session";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (unauthorized(req.session.user, res)) {
    return;
  }
  const pdata = getSortedPostsData();
  res.status(200).json({
    text: pdata,
  });
}

export default withIronSessionApiRoute(handler, sessionOptions);
