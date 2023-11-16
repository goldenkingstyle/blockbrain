const express = require("express");
const cryptoContoller = require("./crypto.controller");

const router = express.Router();

router.get("/getAddress", cryptoContoller.getAddress);

module.exports = router;
