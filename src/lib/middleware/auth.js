const models = require('../../models');
const { verifyToken } = require('../token');

const loginCheck = async (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({
      message: "토큰이 없습니다",
    });
  }
  
  const decodedToken = await verifyToken(token);
  
  const user = await models.User.findOne({
    where: {
      email: decodedToken.email,
    },
  });

  req.user = user;
  next();
  
}

module.exports = loginCheck;