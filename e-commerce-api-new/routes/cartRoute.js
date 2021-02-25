const {
	getCartByUserId,
	addProductToCart,
} = require("../controllers/cartController");

const router = require("express").Router();

router.get("/:id", getCartByUserId);
router.post("/add", addProductToCart);

module.exports = router;
