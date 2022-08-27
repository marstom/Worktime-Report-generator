import { SaveWorktimeEntryService } from "/lib/services";

export default async function handler(req, res) {
  console.log(`request delete data ${req.body}`);
  if (req.method === "DELETE") {
    console.log(
      `!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!request delete data ${req.body}`,
    );
    const service = new SaveWorktimeEntryService();
    service.deleteWorktimeEntity(req.body);
    return res.status(201).json({ message: "Deleted", data: req.body });
  }
  return res.status(400).json({ error: "Accepts only delete method" });
}
