module.exports = function (req, res, next) {
	res.writeHead(301, {
		'Location': '/help/faq'
	});
	res.end();
};