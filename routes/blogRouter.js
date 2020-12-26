const router = require('express').Router();
const {
    getAllBlogs,
    getSingleBlog,
    createBlog,
    updateSingleBlog,
    deleteSingleBlog
} = require('../controllers/blogController');


router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getSingleBlog);
router.post('/blogs', createBlog);
router.patch('/blogs/:id', updateSingleBlog);
router.delete('/blogs/:id', deleteSingleBlog);

module.exports = router;