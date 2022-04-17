const Message = require("../../../models/Message");
const moment = require("moment");
export default async function handler(req, res) {
  try {
    const data = req.body;
    data.date = moment().unix();

    await Message.create(data);

    return res.status(200).json({ message: "message sent" })
  } catch (error) {
    return res.status(500).json(error);
  }

}
