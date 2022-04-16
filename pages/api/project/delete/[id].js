require("../../../../lib/mongodb");
const Project = require("../../../../models/Project");
export default async function handler(req, res) {
  try {
    const { id } = req.query;
    console.log(id);
    await Project.findByIdAndDelete(id);
    return res.status(200).json({ message: "project deleted" });

  } catch (error) {
    return res.status(200).json(error);
  }
}
