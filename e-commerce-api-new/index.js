const app = require("express")();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 2000;
const db = require("./models");
const { userRoute, cartRoute, productRoute } = require("./routes");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/users", userRoute);
app.use("/cart", cartRoute);
app.use("/products", productRoute);

// db.sequelize.sync({).then(() => {
app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT}`));
// });
