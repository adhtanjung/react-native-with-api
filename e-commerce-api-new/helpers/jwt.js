const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
	if (!req.body.token || req.body.token.length === 0) {
		return res.send("Not authorized");
	} else {
		try {
			const decoded = jwt.verify(req.body.token, "secretKey");
			req.user = decoded;
			next();
		} catch (err) {
			next(err);
		}
	}
};

const createToken = (payload) => {
	return jwt.verify(payload, "secretKey");
};

module.exports = { checkToken, createToken };
