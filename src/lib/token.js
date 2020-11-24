require('dotenv').config();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const createToken = async (email) => {
  const payload = {
    email
  };

  const options = {
    expiresIn: '30d',
  }

  return jwt.sign(payload, JWT_SECRET, options);
}

const verifyToken = async (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
  createToken,
  verifyToken,
}