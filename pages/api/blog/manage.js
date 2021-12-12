const db = require("../../../lib/database");
import withSession from "../../../lib/session";

export default withSession(async (req, res) => {
  db.query("SELECT * FROM blogs", (err, result) => {
    if (err) res.status(500).json(err);
    const data = JSON.parse(JSON.stringify(result));
    res.status(200).json(data);
  });
});
