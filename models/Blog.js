const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true,
    }
});



module.exports = mongoose.models.Blog || mongoose.model("Blog", BlogsSchema);