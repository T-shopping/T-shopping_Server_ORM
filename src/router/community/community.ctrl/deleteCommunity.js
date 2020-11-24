const models = require('../../../models');
const Community = require('../../../models/Community');

const deleteCommunity = async (req, res) => {
  const { user } = req;
  const { idx } = req.params;
  
  try {
    const Community = await models.Community.findOne({
      where: {
        idx: idx,
      },
    });

    if (!Community) {
      return res.status(404).json({
        message: "없는 게시글입니다."
      });
    }
    // if(!(Shop.idx === user.idx)){
    //   return res.status(403).json({
    //     message: "자신의 게시물이 아닙니다."
    //   });
    // }
    await models.Community.destroy({
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

module.exports = deleteCommunity;