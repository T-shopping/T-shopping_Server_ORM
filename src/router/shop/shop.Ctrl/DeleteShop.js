const models = require('../../../models');

const deleteShop = async (req, res) => {
  const { user } = req;
  const { idx } = req.params;
  
  try {
    const Shop = await models.Shop.findOne({
      where: {
        idx: idx,
      },
    });

    if (!Shop) {
      return res.status(404).json({
        message: "없는 게시글입니다."
      });
    }
    // if(!(Shop.idx === user.idx)){
    //   return res.status(403).json({
    //     message: "자신의 게시물이 아닙니다."
    //   });
    // }
    await models.Shop.destroy({
      where: {
        idx: idx,
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