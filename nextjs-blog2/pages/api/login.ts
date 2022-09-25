import type { User } from "./user";

import { Octokit } from "octokit";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";
const octokit = new Octokit();

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = await req.body;

  try {
    const {
      data: { login, avatar_url },
    } = await octokit.rest.users.getByUsername({ username });
    // in current version it's single user application, in future will be multiuser, it required db adjustment
    const isPasswordValid = password === process.env.USER_PASSWORD;
    const isUserValid = username === process.env.ONLY_USERNAME_AVAILABLE;

    const user = {
      isLoggedIn: isPasswordValid && isUserValid,
      login,
      avatarUrl: avatar_url,
    } as User;
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions);
