const { insertNewUser, getAllUsers, getUserById } = require("../controllers");

const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/register", insertNewUser);
router.get("/:id", getUserById);

module.exports = router;
