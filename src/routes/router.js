const express = require('express');
const router = express.Router();

const authRouter = require('./auth.router');
const { authHandler } = require('../middlewares/authhandler');
const { logout } = require('../controllers/auth.controller');
const postsRouter = require('./posts.router');
router.use('', authRouter);

//secure
router.use([authHandler]);
router.post('/logout', logout);
router.use('/posts', postsRouter);
module.exports = router;
