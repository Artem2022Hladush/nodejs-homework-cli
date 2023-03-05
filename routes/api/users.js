const express = require("express");

const { validateBody } = require("../../middlewars");
const { registerSchema } = require("../../shemas");
const {user: ctrl} = require("../../controllers");

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrl.register);

router.post("/login", validateBody(registerSchema), ctrl.login)

module.exports = router;