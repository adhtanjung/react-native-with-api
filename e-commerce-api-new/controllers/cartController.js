const { Cart } = require("../models");
const { Op } = require("sequelize");

const getCartByUserId = async (req, res) => {
	try {
		const response = Cart.findAll({
			where: {
				userId: {
					[Op.eq]: req.params.id,
				},
			},
		});

		return res.send(response);
	} catch (err) {
		return res.send(err.message);
	}
};

const addProductToCart = async (req, res) => {
	try {
		const { productId, product_quantity, userId } = req.body;
		const response = await Cart.create({
			userId,
			product_quantity,
			productId,
		});
		return res.send(response);
	} catch (err) {
		return res.send(err.message);
	}
};

module.exports = {
	getCartByUserId,
	addProductToCart,
};
