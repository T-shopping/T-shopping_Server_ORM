require('dotenv').config();
const models = require('../../../models');
const encrypt = require('../../../lib/');

const login = async (req, res) => {
  const { body } = req;

  try {
    if (!(body.email) && !(body.pw)) {
      return res.status(400).json({
        meeesage: "Email이나 비밀번호를 입력해주세요",
      }) ;
    }

    const encryptData = encrypt.createToken(body.pw);

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

    const token = createToken(email);

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