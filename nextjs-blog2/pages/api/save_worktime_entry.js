import { Exception } from "sass";
import { SaveWorktimeEntryService } from "/lib/services";

export default function handler(req, res) {
  if (req.method === "POST") {
    // const service = SaveWorktimeEntryServiceice()
    // service.saveWorktimeEntry(req.body)
    return res.status(201).json({ message: "Created", data: req.body });
  } else {
    return res.status(400).json({ error: "Accepts only post method" });
  }

  return res.status(200).json({ status: "is ok" });
}
