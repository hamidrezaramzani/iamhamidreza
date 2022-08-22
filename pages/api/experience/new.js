require("../../../lib/mongodb");
const Experience = require("../../../models/Experience");
import withSession from "../../../lib/session";
export default withSession(async (req, res) => {
  const data = req.body;
  await Experience.create(data);

  return res.status(200).json({
    message: "Experience added"
  })
});
