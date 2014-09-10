module.exports = function (req, res, next) {
	res.render('landing', {
		'sectionname': 'Tutorials',
		navbarSelection: 'docs'
	});
};
