const { getAllUsers, insertNewUser, userLogin } = require("./userController");
const { addProductToCart, getCartByUserId } = require("./cartController");
const { addNewProduct } = require("./productController");

module.exports = {
	getAllUsers,
	insertNewUser,
	userLogin,
	addProductToCart,
	getCartByUserId,
	addNewProduct,
};
