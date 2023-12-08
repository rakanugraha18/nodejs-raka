const { posts } = require('../db/models');

module.exports.getPosts = async (req, res, next) => {
  const postData = await posts.findAll();
  res.json({ success: true, data: postData });
};
