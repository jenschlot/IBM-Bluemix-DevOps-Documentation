
var nconf = require('nconf');
var NavbarClient = require("../lib/clients/navbar-client.js");


var renderDocsLanding = function(req, res, next, headerContent) {

	res.render('docs_landing', {
		'sectionname': 'Docs',
		navbarSelection: 'docs',
		headerContent: headerContent
	});	
}


module.exports = function (req, res, next) {

	var args = {
		"selection": "navbar.entry.help.docs",
		"userid": res.locals.user.userId,
		"username": res.locals.user.name,
	};

	NavbarClient.getNavbar(args, req, function (error, content) {
		if (!error) {
			renderDocsLanding(req, res, next, content);
		}
	});
	
};