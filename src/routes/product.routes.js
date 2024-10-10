const router = require("express").Router();

const productController = require("../controllers/product.controller");

router.post("/add", productController.addProduct);

router.get("/list", productController.getAllProducts);

router.get("/:productId", productController.getSingleProduct);

router.put("/:productId", productController.deleteSingleProduct);

module.exports = router;
