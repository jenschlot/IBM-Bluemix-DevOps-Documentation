module.exports = function(req, res, next) {
	if (!req.rendered_markdown)
		return next();

	res.render(
		'document',
		{ 
			markdown: req.rendered_markdown, 
			jazzhuburl: req.config.jazzhub.url
		}
	);
}

