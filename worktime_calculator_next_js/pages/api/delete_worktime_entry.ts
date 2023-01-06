import { withIronSessionApiRoute } from "iron-session/next";
import { unauthorized } from "lib/auth";
import { SaveWorktimeEntryService } from "lib/services";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import initializeDb from "lib/prodDb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // @ts-ignore
  if (unauthorized(req.session.user, res)) {
    return;
  }
  const db = await initializeDb();
  console.log(`request delete data ${req.body}`);
  if (req.method === "DELETE") {
    console.log(
      `!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!request delete data ${req.body}`,
    );
    const service = new SaveWorktimeEntryService(db);
    await service.deleteWorktimeEntity(req.body);
    return res.status(201).json({ message: "Deleted", data: req.body });
  }
  return res.status(400).json({ error: "Accepts only delete method" });
}

export default withIronSessionApiRoute(handler, sessionOptions);
