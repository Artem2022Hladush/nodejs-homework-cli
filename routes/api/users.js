const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewars");
const { registerSchema } = require("../../shemas");
const {user: ctrl} = require("../../controllers");

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrl.register);

router.post("/login", validateBody(registerSchema), ctrl.login);

router.get("/current", authenticate,  ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar );

module.exports = router;