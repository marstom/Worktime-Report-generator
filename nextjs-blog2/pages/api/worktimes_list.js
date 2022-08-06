import { getWorktimes } from '../../lib/worktime'

export default function handler(req, res) {
    const worktimes = getWorktimes()
    res.status(200).json(worktimes);
  }