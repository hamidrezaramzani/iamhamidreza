require("../../../lib/mongodb");
const Message = require("../../../models/Message");
export default async function handle(req, res) {
  try {
    const messages = await Message.find({});
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json(error);
  }
}
