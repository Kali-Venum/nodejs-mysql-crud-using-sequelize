const models = require("../database/models");

async function create(req, res) {
  const post = {
    title: req.body.title,
    content: req.body.content,
    image_url: req.body.imageURL,
    category_id: req.body.categoryId,
    user_id: req.body.userId,
  };

  const result = await models.Post.create(post);

  res.status(201).json({
    message: "A new post is created.",
    data: result,
  });
}

module.exports = {
  create,
};
