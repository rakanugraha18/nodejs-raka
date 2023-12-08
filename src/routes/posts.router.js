const express = require('express');
const { getPosts } = require('../controllers/post.controller');
const router = express.Router();

router.route('/').get(getPosts);

module.exports = router;
