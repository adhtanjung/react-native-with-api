const { User } = require("../models");
const { Op } = require("sequelize");

const registerCheck = async (req, res, next) => {
	try {
		const response = await User.findAll({
			where: {
				email: {
					[Op.eq]: req.body.email,
				},
			},
		});
		console.log(response);
		if (response.length > 0) {
			return res.send({ message: "Email already taken" });
		} else {
			next();
		}
	} catch (err) {
		return res.send(err.message);
	}
};

module.exports = { registerCheck };
