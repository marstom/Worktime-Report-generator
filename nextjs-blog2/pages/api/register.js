export default function handler(req, res) {
    const email = req.body.email
    console.log("User sent: ", email);
    return res.status(200).json({status: "is ok"})
  }