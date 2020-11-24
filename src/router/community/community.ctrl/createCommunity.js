const models = require('../../../models');

const createCommunity = async (req, res) => {
  const { body, user, info } = req;

  try {
    await models.Communiy.create({
      title: body.title,
      content: body.content,
      user_name: info.user_name,
    });

    return res.status(200).json({
      message: "게시 성공!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "서버 오류",
    });
  }
}

module.exports = createCommunity;