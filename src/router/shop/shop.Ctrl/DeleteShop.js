const models = require('../../../models');

const deleteShop = async (req, res) => {
  const { user } = req;
  const { idx } = req.params;

  try {
    const Shop = await models.Shop.findOne({
      where: {
        idx,
      },
    });



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

module.exports = deleteShop;