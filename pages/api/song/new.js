require("../../../lib/mongodb");
const Song = require("../../../models/Song");
const moment = require("moment");
import withSession from "../../../lib/session";
export default withSession(async (req, res) => {
  const data = req.body;
  data.date = moment().unix();
  await Song.create(data);

  return res.status(200).json({
    message: "Song added",
  });
});
