const router = require('express').Router();
const { createUser, getUser } = require('../controllers/userController');


router.post('/users', createUser);
router.get('/users', getUser);

module.exports = router;