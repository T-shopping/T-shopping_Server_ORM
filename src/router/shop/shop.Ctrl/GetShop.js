const models = require('../../../models');

const getShop = async (req, res) => {
  const { user } = req;
  const { idx } = req.params;

  try {
    const shop = await models.Shop.findOne({
      where: {
        idx,
      },
      raw: true,
    });

    if (!post) {
      return res.sta(404).json({
        message: "잘못된 요청입니다",
      });
    }

    return res.status(200).json({
      message: "삭제 성공!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "서버 오류",
    });
  }
}

module.exports = getShop;