require("../../../../lib/mongodb");
const Blog = require(".././../../../models/Blog");
export default async function handler(req, res) {
  try {
    const { id } = req.query;
    await Blog.findByIdAndDelete(id);
    return res.status(200).json({ message: "blog deleted" })
  } catch (error) {
    return res.status(500).json(error);
  }

}
