const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },

        description: {
            type: String,
            required: true,
            unique: true,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("post", postSchema);