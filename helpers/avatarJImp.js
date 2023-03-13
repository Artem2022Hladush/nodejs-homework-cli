const Jimp = require("jimp");

const avatarJimp = async (path) => {
   	const avatar = await Jimp.read(path);
   	await avatar.resize(250, 250).writeAsync(path);
};

module.exports = avatarJimp;