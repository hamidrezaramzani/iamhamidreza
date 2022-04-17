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
    },
    link: {
        type: String,
        default: (Math.random() + 1).toString(36)
    }
});



module.exports = mongoose.models.Blog || mongoose.model("Blog", BlogsSchema);