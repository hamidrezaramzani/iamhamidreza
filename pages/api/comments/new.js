const Blog = require("../../../models/Blog");
const moment = require("moment");
const _ = require("lodash");
export default async function handler(req, res) {
    try {
        const data = req.body;
        data.date = moment().unix();

        await Blog.findOneAndUpdate({ _id: data.id }, { $push: { comments: _.omit(data, "id") } });
        return res.status(200).json({ message: "comment sent" })
    } catch (error) {
        return res.status(500).json(error);
    }

}
