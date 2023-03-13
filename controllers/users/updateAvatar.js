const path = require("path");
const fs = require("fs/promises");

const {User} = require("../../models");
const {avatarJimp} = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
const {_id} = req.user;

	const {path: tempUpload, originalname} = req.file;
	const filename = `${_id}_${originalname}`;
	const avatarsUpload = path.join(avatarsDir, filename);

	await avatarJimp(tempUpload);

	await fs.rename(tempUpload, avatarsUpload);
	const avatarURL = path.join("avatars", filename);
	await User.findByIdAndUpdate(_id, {avatarURL});

	res.status(200).json({
		avatarURL,
	})

};

module.exports = updateAvatar;