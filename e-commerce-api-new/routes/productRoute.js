const { addNewProduct } = require("../controllers");

const router = require("express").Router();

router.post("/addProduct", addNewProduct);
module.exports = router;
