const { Op } = require("sequelize");
const { Product } = require("../models");
const addNewProduct = async (req, res) => {
	try {
		const { product_name, product_price, product_caption } = req.body;
		const response = await Product.create({
			product_name,
			product_price,
			product_caption,
		});
		return res.send(response);
	} catch (err) {
		return res.send(err.message);
	}
};

module.exports = { addNewProduct };
