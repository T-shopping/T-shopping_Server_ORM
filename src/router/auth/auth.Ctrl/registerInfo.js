const models = require('../../../models');
const encrypt = require('../../../lib/encrypt');

const register = async (req, res) => {
  const { body } = req;

  try {
    await models.User_info.create({
      email: body.email,
      user_name: body.user_name,
      address: body.address,
      branch_number: body.branch_number,
      phone: body.phone,
      gender: body.gender,
    });
    
    return res.status(200).json({
      message: "회원가입 성공!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "서버 오류",
    });
  }
}

module.exports = register;