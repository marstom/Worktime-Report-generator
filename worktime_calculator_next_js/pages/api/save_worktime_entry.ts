import { sessionOptions } from "lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { unauthorized } from "lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { SaveWorktimeEntryService } from "lib/services";
import initializeDatabase from "lib/prodDb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // @ts-ignore
  if (unauthorized(req.session.user, res)) {
    return;
  }
  const db = await initializeDatabase();

  if (req.method === "POST") {
    const service = new SaveWorktimeEntryService(db);
    service.saveWorktimeEntry(req.body);
    return res.status(201).json({ message: "Created", data: req.body });
  }
  return res.status(400).json({ error: "Accepts only post method" });
}

export default withIronSessionApiRoute(handler, sessionOptions);
