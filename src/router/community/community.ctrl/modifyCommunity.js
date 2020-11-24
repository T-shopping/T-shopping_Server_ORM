const models = require('../../../models');

const modifyCommunity= async (req, res) => {
  const { body, user } = req;
  const { idx } = req.params;

  try {
      
    const community = await models.Community.findOne({
      where: {
        idx,
      },
    });

    // if(!(community.dataValues.user_email === user.email)){
    //     return res.status(409).json({
    //         message : "자신의 게시물이 아닙니다."
    //     })
    // }

    await models.Community.update(body,{
      where:{
        idx,
      }
    });

    return res.status(200).json({
      message : "수정 완료!"
    });
  } catch(err){
    console.log(err);
    return res.status(500).json({
      message : "서버오류"
    });
  }
}
module.exports = modifyCommunity;