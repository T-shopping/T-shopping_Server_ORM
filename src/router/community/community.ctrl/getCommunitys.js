const models = require('../../../models');

const getShop = async (req, res) => {
  const page = req.params.page;
  const page_size = 10;

  try {
    const communitylist = await models.Community.findAll();

    const totalPage = 0 + Math.ceil(communitylist.length / page_size);
    const startRow = 0 + (page * page_size); 

    const pages = await models.Community.findAll({
      offset: startRow,
      limit: page_size,
      order: [
        ['idx', 'DESC']
      ],
    });   

    return res.status(200).json({
      message: "페이지 불러오기 성공",
      totalPage,
      pages
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "서버 오류",
    });
  }
}

module.exports = getShop;