require("../../../lib/mongodb");
const Project = require("../../../models/Project");
export default async function handle(req, res) {
  try {
    const projects = await Project.find({});
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json(error);
  }
}
