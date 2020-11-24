const models = require('../../../models');

const getShop = async (req, res) => {
  const { body } = req;
  const { page } = req.query;
  const page_size = 10;

  try {
    const communitylist = await models.Communiy.findAll();

    const totalPage = Math.ceil(communitylist / page_size);

    const page = await models.Communiy.findAll({
      limit: page_size,
      offset: startRow,
      order: [
        ['created_at', 'DESC']
      ],
    });   

    return res.status(200).json({
      message: "페이지 불러오기 성공",
      totalPage,

    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "서버 오류",
    });
  }
}

module.exports = getShop;