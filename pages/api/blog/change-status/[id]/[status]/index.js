const db = require("../../../../../../lib/database");
export default function handler(req, res) {
  const { id, status } = req.query;
  db.query(
    "UPDATE blogs SET status=? WHERE id=?",
    [status == 1 ? 0 : 1, id],
    (err) => {
      if (err) res.status(500).json(err);

      res
        .status(200)
        .json({ message: "blog deleted", status: status == 1 ? 0 : 1 });
    }
  );
}
