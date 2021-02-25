const crypto = require("crypto");

const cryptoPass = (payload) => {
	return crypto.createHmac("sha256", "hashPass").update(payload).digest("hex");
};

module.exports = { cryptoPass };
