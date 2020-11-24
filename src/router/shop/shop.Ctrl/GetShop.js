const models = require('../../../models');

const getShop = async (req, res) => {
  const { user } = req;
  const { idx } = req.params;

  try {
    const shop = await models.Shop.findOne({
      where: {
        idx, /// idx : idx, 로도 가능하지만, 같은 변수명이기 때문에 이런식으로도 가능
      },
    });
    if (!shop) {
      return res.sta(404).json({
        message: "잘못된 요청입니다",
      });
    }

    return res.status(200).json({
      message: "게시물 불러오기 성공",
      shop
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "서버 오류",
    });
  }
}

module.exports = getShop;