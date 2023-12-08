const { users, user_detail } = require('../db/models');
const { encryptPayload } = require('../../utils/encrypt');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res, next) => {
  const { username, password } = req.body;

  const err = new Error();

  await users.create({
    id: crypto.randomUUID(),
    username,
    password: encryptPayload(atob(password)),
  });

  res.json({ success: true, message: 'User is created', data: { username } });
};

module.exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  const err = new Error();
  const user = await users.findOne({ where: { username } });

  if (!user) {
    err.message = 'username or password is incorrect';
    return next(err);
  }

  try {
    if (!bcrypt.compareSync(atob(password), user.password)) {
      err.message = 'username or password is incorrect';
      return next(err);
    }
  } catch (err) {
    err.message = 'username or password is incorrect';
    return next(err);
  }

  const token = jwt.sign(
    { userId: user.id, username: user.username },
    process.env.secret_key,
    { expiresIn: '1m' }
  );

  await user_detail.create({
    id: crypto.randomUUID(),
    user_id: user.id,
    token,
  });

  res
    .setHeader('access_token', token)
    .json({ success: true, message: 'Login is success' });
};

module.exports.logout = async (req, res, next) => {
  const { authorization } = req.headers;
  const err = new Error();
  console.log(authorization);
  try {
    await user_detail.destroy({
      where: {
        token: authorization,
      },
    });

    res.json({ success: true, message: 'user is deleted' });
  } catch (error) {
    err.message = error.message;
    return next(err);
  }
};
