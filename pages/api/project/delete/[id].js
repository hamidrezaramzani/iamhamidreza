const db = require("../../../../lib/database");
export default function handler(req, res) {
  const { id } = req.query;
  db.query("DELETE FROM projects WHERE id=?", [id], (err) => {
    if (err) res.status(400).json(err);

    res.status(200).json({ message: "project deleted" });
  });
}
