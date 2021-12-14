const db = require("../../../lib/database");
const bcrypt = require("bcrypt");
import withSession from "../../../lib/session";
export default withSession(async (req, res) => {
  const { username, password } = req.body;  
  db.query(
    "SELECT * FROM admin WHERE username=?",
    [username],
    async (err, result) => {
      if (err) res.status(500).json(err);

      if (result.length) {
        const isCorrectPassword = bcrypt.compareSync(
          password,
          result[0].password
        );
        if (isCorrectPassword) {
          req.session.set("user", result[0]);
          await req.session.save();
          res.status(200).json({
            message: "welcome admin",
          });
        }
      } else {
        res.status(401).json({ message: "username or password is invalid" });
      }
    }
  );
});
