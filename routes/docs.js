module.exports = function (req, res, next) {
	res.render('docs_landing', {
		'sectionname': 'Docs'
	});
};