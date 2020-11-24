const models = require('../../../models');
const { verifyToken } = require('../../../lib/token');

const createCommunity = async (req, res) => {
  const { body } = req;

  try {
    const token = req.headers.token;
    const IsUseremail = await verifyToken(token);

    if(!IsUseremail.email){
      console.log("이메일이 없다");
      return res.status(402).json({
        message: "이메일이 없음"
      });
    }

    await models.Friend.create({
      user_1_email: body.user_1_email,
      user_2_email: body.user_2_email
    });

    return res.status(200).json({
      message: "친구 맺기 성공!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "서버 오류",
    });
  }
}

module.exports = createCommunity;