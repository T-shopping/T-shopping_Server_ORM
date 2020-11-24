const models = require('../../../models');
const encrypt = require('../../../lib/encrypt');

const register = async (req, res) => {
  const { body } = req;

  try {
    await models.User.create({
      email: body.email,
      pw: encrypt(body.pw),
    });
    
    const email = body.email;

    return res.status(200).json({
      message: "회원가입 성공!",
      email,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "서버 오류",
    });
  }
}

module.exports = register;