// /pages/api/contact.js
export default function handler(req, res) {
  if (req.method === "POST") {
    // Process the form data
    console.log(req.body); // log the form data to the server console
    res.status(200).json({ message: "Success" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
