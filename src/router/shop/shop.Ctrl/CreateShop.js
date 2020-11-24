const models = require('../../../models');

const createPost = async (req, res) => {
  const { body, user, info } = req;

  try {
    await models.Shop.create({
      item_name: body.item_name,
      item_content: body.item_content,
      user_email: user.email,
      user_name: info.user_name,
      price: body.price,
      stock: body.stock,
      img: body.img,
      category: body.category,
    });

    return res.status(200).json({
      message: "게시 성공!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "서버 오류",
    });
  }
}

module.exports = createPost;