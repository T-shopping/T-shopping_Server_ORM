const models = require('../../../models');

const createPost = async (req, res) => {
  const { body, user } = req;

  try {
    await models.Shop.create({
      item_name: body.item_name,
      item_content: body.item_content,
      user_email: user.email,
      user_name: user.name,
      price: body.price,
      stock: body.stock,
      category: body.category,
    })
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "서버 오류",
    });
  }
}