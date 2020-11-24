const models = require('../../../models');

const getShop = async (req, res) => {
  const { user } = req;
  const { page } = req.params;

  try {
    let shops = [];
    shops = await models.Shop.findAll({
      order: [
        ['created_At', 'DESC'],
      ],
      raw: true,
    })

    return res.status(200).json({
      message: "게시물 불러오기 완료.",
      shops
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "서버 오류",
    });
  }
}

module.exports = getShop;