const { getAllUsers, insertNewUser, userLogin } = require("../controllers");

const { registerCheck } = require("../middlewares");

const router = require("express").Router();

router.get("/all", getAllUsers);
router.post("/new", registerCheck, insertNewUser);
router.post("/login", userLogin);

module.exports = router;
