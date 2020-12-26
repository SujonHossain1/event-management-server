const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    image: String,
    description: {
        type: String,
        trim: true,
    },
    tags: String,
    date: {
        type: Date,
        default: Date.now,
    },
    creator: String,
});

const BlogModel = new mongoose.model('Blog', blogSchema);
module.exports = BlogModel;