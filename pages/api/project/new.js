import withSession from "../../../lib/session";
const db = require("../../../lib/database");
const moment = require("moment");
export default withSession(async (req, res) => {
  const data = req.body;
  data.date = moment().unix();
  db.query(
    "INSERT INTO `projects`(`title`,`description`, `image`, `link`,`date`) VALUES (?,?,?,?,?)",
    Object.values(data),
    (err) => {
      if (err) res.status(500).json(err);

      res.status(200).json({
        message: "project added",
      });
    }
  );
});
