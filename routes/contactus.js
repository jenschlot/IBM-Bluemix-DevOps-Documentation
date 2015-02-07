module.exports = function (req, res, next) {
	res.writeHead(301, {
		'Location': '/contactus'
	});
	res.end();
};