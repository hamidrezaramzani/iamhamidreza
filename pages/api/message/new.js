const moment = require("moment");
const db = require("../../../lib/database");
export default function handler(req, res) {
  const data = req.body;
  data.moment = moment().unix();
  db.query(
    "INSERT INTO `messages`(`email`, `message`, `date`) VALUES (?,?,?)",
    Object.values(data),
    (err) => {
      if (err) res.status(500).json(err);

      res.status(200).json({
        message: "message saved",
      });
    }
  );
}
