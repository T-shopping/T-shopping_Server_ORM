require('dotenv').config(); 
const crypto = require('crypto');

const { SECRET } = process.env;

module.exports = (text) => {
  const encrypted = crypto
    .createHmac('sha256', SECRET)
    .update(text)
    .digest('hex');

    return encrypted;
}

