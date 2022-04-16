require("../../../lib/mongodb");
const Blog = require("../../../models/Blog");

export default async function handle(req, res) {
  try {
    const blogs = await Blog.find({});
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(200).json(error);
  }
}
