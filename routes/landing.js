module.exports = function (req, res, next) {
	res.render('landing', {
		jazzhuburl: req.config.jazzhub.url
	});
};