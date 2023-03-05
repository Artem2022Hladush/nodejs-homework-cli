const express = require("express");

const {validateBody} = require("../../middlewars");
const {registerSchema} = require("../../shemas")

const router = express.Router();

router.post("/register", validateBody(registerSchema))

module.exports = router;