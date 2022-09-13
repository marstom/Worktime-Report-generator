import { loadedSettings } from "/lib/settings";

export default async function handler(req, res) {
  const query = req.query;
  res.status(200).json(await loadedSettings());
}
