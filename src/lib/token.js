require('dotenv').config();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

export const createToekn = async (name) => {
  const payload = {
    name
  };

  const options = {
    expiresIn: '30d',
  }

  return jwt.sign(payload, JWT_SECRET, options);
}

export const verifyToken = async (token) => jwt.verify(token, JWT_SECRET);