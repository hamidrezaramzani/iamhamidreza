require("../../../lib/mongodb");
const Blog = require(".././../../models/Blog");
export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const blog = await Blog.findById(id);
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json(error);
  }

}
