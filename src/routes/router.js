const express = require('express');
const router = express.Router();

const authRouter = require('./auth.router');
const { authHandler } = require('../middlewares/authhandler');
const { logout } = require('../controllers/auth.controller');
const postsRouter = require('./posts.router');
const movies = require('../controllers/movie.controller');

router.use('', authRouter);

//public
router.route('/movies').get(movies.allMovie);

//secure
router.use([authHandler]);
router.post('/logout', logout);
router.use('/posts', postsRouter);
module.exports = router;
