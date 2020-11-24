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
  
  const info = await models.Info.findOne({
    where: {
      email: decodedToken.email,
    },
  });

  const user = {
    email: decodedToken.email,
  };

  console.log(info);
  console.log(user);
  req.user = user;
  req.info = info;
  next();
  
}

module.exports = loginCheck;