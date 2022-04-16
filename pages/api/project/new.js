require("../../../lib/mongodb");
const Project = require("../../../models/Project");
const moment = require("moment");
import withSession from "../../../lib/session";
export default withSession(async (req, res) => {
  const data = req.body;
  data.date = moment().unix();
  await Project.create(data);

  return res.status(200).json({
    message: "project added"
  })
});
