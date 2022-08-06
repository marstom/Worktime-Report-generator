// slow endpoint simulation
//  req http.IncomingMessage, 
//  http.ServerResponse
export default function handler(req, res) {
    setTimeout(
      () => res.status(200).json({ text: 'Hello' }), 1000
    )
  }