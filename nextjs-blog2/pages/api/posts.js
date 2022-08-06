import { getSortedPostsData } from '../../lib/posts'

export default function handler(req, res) {
    const pdata = getSortedPostsData()
    res.status(200).json({ 
        text: pdata,
     });
  }