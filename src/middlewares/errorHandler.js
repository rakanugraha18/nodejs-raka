module.exports.errorHandler = (err, req, res, next) => {
  const { message } = err;
  res.json({ message: message });
};
module.exports.notFound = (req, res, next) => {
  res.json({ message: 'Page not found' });
};
