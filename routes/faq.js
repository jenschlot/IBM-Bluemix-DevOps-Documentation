Imodule.exports = function (req, res, next) {
	res.writeHead(301, {
		'Location': '/docs/faq'
	});
	res.end();
};