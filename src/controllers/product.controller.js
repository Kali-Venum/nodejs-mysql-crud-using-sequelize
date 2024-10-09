const db = require("../models");

// Models.
const ProductModel = db.products;
const ReviewModel = db.reviews;

// Add a product.
const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await ProductModel.create(info);

  res.status(200).send(product);
};

// Get all products.
const getAllProducts = async (req, res) => {
  const products = await ProductModel.findAll({
    where: {
      published: true,
    },
    attributes: ["title", "price", "description"],
  });

  res.status(200).send(products);
};

// Get a single product.
const getSingleProduct = async (req, res) => {
  const productId = req.params.productId;

  const product = ProductModel.findOne({
    where: {
      id: productId,
    },
  });

  res.status(200).send(product);
};

// Update a product.
const updateSingleProduct = async (req, res) => {
  const productId = req.params.ProductId;

  const product = await ProductModel.update(req.body, {
    where: { id: productId },
  });

  res.send(200).send(product);
};

// Delete a product.
const deleteSingleProduct = async (req, res) => {
  const productId = req.params.productId;

  await ProductModel.destroy({
    where: {
      id: productId,
    },
  });

  res.send(200).send("Product is deleted.");
};

module.exports = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
