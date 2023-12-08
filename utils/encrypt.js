const bcrypt = require('bcryptjs');

module.exports.encryptPayload = (payload) => {
  return bcrypt.hashSync(payload, Number(process.env.salt_round));
};
