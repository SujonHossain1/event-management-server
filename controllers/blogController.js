const BlogModel = require("../models/blog");

const createBlog = async (req, res) => {
    try {
        const blog = new BlogModel(req.body);
        const result = await blog.save();
        res.status(201).send(result);

    } catch (err) {
        res.status(409).json({
            message: err.message
        });
    }
};

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find({}).sort({ date: -1 });
        res.status(200).send(blogs);

    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
};

const getSingleBlog = async (req, res) => {
    try {
        const _id = req.params.id;
        const blog = await BlogModel.findOne({ _id });
        res.status(200).send(blog);

    } catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
};

const updateSingleBlog = async (req, res) => {
    try {
        const _id = req.params.id;
        const update = await BlogModel.findOneAndUpdate({ _id },
            {
                $set: req.body
            }, {
            new: true
        });
        res.status(200).send(update);

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
};

const deleteSingleBlog = async (req, res) => {
    try {
        const _id = req.params.id;
        const deletePost = await BlogModel.findOneAndDelete({ _id });
        res.status(200).send(deletePost);

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
};

module.exports = { createBlog, getAllBlogs, getSingleBlog, updateSingleBlog, deleteSingleBlog };
