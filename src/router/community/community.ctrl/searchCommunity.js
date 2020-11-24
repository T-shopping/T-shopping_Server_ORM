const models = require('../../../models');
const sequelie = require('sequelize');
const Op = sequelie.Op;

const searchCommunity = async (req, res) => {
  const keyword = req.query.keyword;
  const { page } = req.params;
  const page_size = 10;

  try {

    const startRow = (page * page_size);
    const pages = await models.Community.findAll({
      where: {
        title: {
          [Op.like]: "%" + keyword + "%",
        },
      },
      offset: startRow,
      limit: page_size,
      order: [
        ['idx', 'DESC'],
      ],
    });

    const totalPage = 0 + Math.ceil(pages.length / page_size);

    return res.status(200).json({
      messgae: "페이지 검색 성공!",
      totalPage,
      pages,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "서버 오류",
    });
  }
}

module.exports = searchCommunity;