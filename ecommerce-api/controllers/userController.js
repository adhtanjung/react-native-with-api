const { User } = require("../models");

const getAllUsers = async (req, res) => {
	try {
		const response = await User.findAll({
			attributes: ["username", "email", "password"],
		});
		return res.send(response);
	} catch (err) {
		console.log(err.message);
		return res.send(err.message);
	}
};

const getUserById = async (req, res) => {
	try {
		const response = await User.findAll({
			where: {
				id: req.params.id,
			},
		});
		return res.send(response);
	} catch (err) {
		console.log(err.message);
		return res.send(err.message);
	}
};
const insertNewUser = async (req, res) => {
	try {
		const newUser = await User.create({
			username: "Adhi",
			email: "adhtanjung@gmail.com",
			password: "asd123",
		});
		return res.send({ data: newUser, message: "added new user" });
	} catch (err) {
		console.log(err.message);
		return res.send(err.message);
	}
};

module.exports = {
	insertNewUser,
	getAllUsers,
	getUserById,
};
