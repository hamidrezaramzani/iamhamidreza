const db = require("../../../lib/database");
import withSession from "../../../lib/session";
const moment = require("moment");

export default withSession(async (req, res) => {
  const data = req.body;
  data.time = moment().unix();
  db.query(
    "INSERT INTO `blogs`(`content`,`description`, `image`,  `title`,  `date`) VALUES (?,?,?,?,?)",
    Object.values(data),
    (err, result) => {
      if (err) res.status(500).json(err);

      res.status(200).json({
        message: "blog added",
      });
    }
  );
});
