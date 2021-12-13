const db = require("../../../lib/database");
export default function handle(req, res) {
  db.query("SELECT * FROM projects", (err, result) => {
    if (err) res.status(400).json(err);

    const data = JSON.parse(JSON.stringify(result));
    res.status(200).json(data);
  });
}
