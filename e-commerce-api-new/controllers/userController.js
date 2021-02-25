const { User, Cart, Product } = require("../models");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const { cryptoPass } = require("../helpers");

const insertNewUser = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		const encryptedPassword = cryptoPass(password);
		// console.log(password);
		const response = await User.create({
			username,
			email,
			password: encryptedPassword,
		});
		console.log({ ...response.dataValues });
		const token = jwt.sign({ ...response.dataValues }, "secretKey");
		console.log(token);
		return res.send({
			id: response.id,
			username: response.username,
			email: response.email,
			token,
		});
	} catch (err) {
		return res.send(err);
	}
};

const userLogin = async (req, res) => {
	try {
		const { email, password } = req.body;

		const encryptedPassword = cryptoPass(password);
		console.log(email);
		const response = await User.findAll({
			attributes: ["id", "username", "email"],
			include: [
				{
					model: Cart,
				},
			],
			where: {
				[Op.and]: [
					{
						email: email,
					},
					{
						password: encryptedPassword,
					},
				],
			},
		});
		// console.log(response);
		if (response.length > 0) {
			const token = jwt.sign({ ...response[0].dataValues }, "secretKey");
			return res.send({ ...response[0].dataValues, token });
		} else {
			return res.send({ message: "User not found" });
		}
	} catch (err) {
		return res.send(err);
	}
};
// router.post("/new", );

const getAllUsers = async (req, res) => {
	try {
		const response = await User.findAll({
			attributes: ["id", "username", "email"],
		});

		return res.send(response);
	} catch (err) {
		return res.send(err.message);
	}
};
// router.get("/all");
module.exports = { insertNewUser, getAllUsers, userLogin };
