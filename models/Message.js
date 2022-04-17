const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.models.Message || mongoose.model("Message", MessageSchema);