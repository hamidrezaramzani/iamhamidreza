const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);