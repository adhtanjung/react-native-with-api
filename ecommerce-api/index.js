const app = require("express")();
const PORT = process.env.PORT | 2000;
const db = require("./models");

const bodyParser = require("body-parser");
const { userRouter } = require("./routers");

app.use(bodyParser.json());
app.get("/", (req, res) => {
	return res.send("API OK");
});

app.use("/user", userRouter);
db.sequelize
	.sync()
	.then(() =>
		app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT}`))
	);
