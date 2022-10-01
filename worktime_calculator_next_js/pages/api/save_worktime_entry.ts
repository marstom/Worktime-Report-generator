import { sessionOptions } from "lib/session";
import { withIronSessionApiRoute } from "iron-session/next";
import { unauthorized } from "lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { SaveWorktimeEntryService } from "lib/services";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (unauthorized(req.session.user, res)) {
    return;
  }

  if (req.method === "POST") {
    const service = new SaveWorktimeEntryService();
    service.saveWorktimeEntry(req.body);
    return res.status(201).json({ message: "Created", data: req.body });
  }
  return res.status(400).json({ error: "Accepts only post method" });
}

export default withIronSessionApiRoute(handler, sessionOptions);
