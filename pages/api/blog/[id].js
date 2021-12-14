const db = require("../../../lib/database");
export default function handler(req, res) {
  const { id } = req.query;
  db.query(
    "SELECT * FROM blogs WHERE id=? AND status=1",
    [id],
    (err, result) => {
      if (err) res.status(400).json(err);

      res.status(200).json(result[0]);
    }
  );
}
