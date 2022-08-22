require("../../../lib/mongodb");
const Experience = require("../../../models/Experience");
export default async function handle(req, res) {
  try {
    const experiences = await Experience.find({});
    return res.status(200).json(experiences);
  } catch (error) {
    return res.status(500).json(error);
  }
}
