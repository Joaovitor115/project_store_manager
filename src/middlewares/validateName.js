const { schema } = require('./schema');

module.exports = async (req, res, next) => {
  const data = req.body;
  const { error } = schema.validate(data);
  console.log(error);
  if (error) {
    if (error.details[0].type === 'any.required') {
      console.log(error.details);
      return res.status(400).json({ message: error.details[0].message });
    }
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
};