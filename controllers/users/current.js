const getCurrent = async (req, res) => {
	const {email} = req.user;

	res.status(200).json({
		code: 200,
		status: "success",
		data: {
			user: {
				emai: email,
			}
		}
	})
};

module.exports = getCurrent;