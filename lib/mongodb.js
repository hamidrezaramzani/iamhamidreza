const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://hamidrezaramzani:${process.env.MONGODB_PASSWORD}@cluster0.wmowe.mongodb.net/hamidrezaramzani?retryWrites=true&w=majority`, (err) => {
    if (err)
        console.log(err);
});