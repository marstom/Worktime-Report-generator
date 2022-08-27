import { SaveWorktimeEntryService } from "/lib/services";

export default function handler(req, res) {
  if (req.method === "POST") {
    const service = new SaveWorktimeEntryService();
    service.saveWorktimeEntry(req.body);
    return res.status(201).json({ message: "Created", data: req.body });
  }
  return res.status(400).json({ error: "Accepts only post method" });
}
