const models = require('../../../models');

const getPost = async (req, res) => {
  const { idx } = req.params;
  
  try {
    const community = await models.Communiy.findOne({
      where: {
        idx,
      },
    });

    if (!community) {
      return res.status(404).json({
        message: "잘못된 요청입니다",
      });
    }

    return res.status(200).json({
      message: "불러오기 성공!",
      community,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "서버 오류",
    });
  }
}

module.exports = getPost;