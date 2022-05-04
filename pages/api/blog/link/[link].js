require("../../../../lib/mongodb");
const Blog = require("../.././../../models/Blog");
export default async function handler(req, res) {
    try {
        const { link } = req.query;
        const blog = await Blog.findOne({ link });
        console.log(blog);
        if(blog === null)
        return res.status(400).json({message : "link is not avaliable"});

        return res.status(200).json({ id: blog._id });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }

}
