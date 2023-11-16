const express = require("express");
const cryptoRoutes = require("./crypto.routes");

const router = express.Router();
router.use("/crypto", cryptoRoutes);

module.exports = router;
