require('dotenv').config();
const models = require('../../../models');
const encrypt = require('../../../lib/encrypt');
const { createToken } = require('../../../lib/token');

const login = async (req, res) => {
  const { body } = req;

  try {
    const encryptData = encrypt(body.pw);

    const user = await models.User.findOne({
      where: {
        email: body.email,
        pw: encryptData,
     },
    });

    if (!user) {
      return res.status(401).json({
        message: "없는 계정정보입니다",
      });
    }

    const token = await createToken(user.email);

    return res.status(200).json({
      message: "로그인 성공!",
      token,
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      meeesage: "서버 오류",
    });
  }
}

module.exports = login;