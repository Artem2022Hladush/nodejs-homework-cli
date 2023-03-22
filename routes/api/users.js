const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewars");
const { registerSchema, verifyEmailShema } = require("../../shemas");
const {user: ctrl} = require("../../controllers");

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrl.register);

router.get("/verify/:veryficationToken", ctrl.verifyEmail)

router.post("/verify", validateBody(verifyEmailShema), ctrl.resendVerifyEmail)

router.post("/login", validateBody(registerSchema), ctrl.login);

router.get("/current", authenticate,  ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar );

module.exports = router;