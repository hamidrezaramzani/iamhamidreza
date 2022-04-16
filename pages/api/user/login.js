require("../../../lib/mongodb");
const User = require("../../../models/User");
import withSession from "../../../lib/session";
export default withSession(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });

  if (user) {
    req.session.set("user", user);
    await req.session.save();
    return res.status(200).json({ message: "user logged" });

  }
  return res.json(401).json({ message: "username or password is invalid" });
});
