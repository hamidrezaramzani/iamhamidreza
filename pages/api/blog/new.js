require("../../../lib/mongodb");
const Blog = require("../../../models/Blog");
const moment = require("moment");
import withSession from "../../../lib/session";

export default withSession(async (req, res) => {
  try {
    const data = req.body;
    data.date = moment().unix();

    await Blog.create(data);
    return res.status(200).json({ message: "blog created" })
  } catch (error) {
    return res.status(200).json(error);
  }

});
