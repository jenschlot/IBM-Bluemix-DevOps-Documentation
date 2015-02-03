var nconf = require('nconf');
var NavbarClient = require("../lib/clients/navbar-client.js");

var renderDocsLanding = function(req, res, next, headerContent) {
	var config = require("../config").get("config");
	var sidebarLinks = require("../config.json").sidebarLinks;
	var headerStyling;

	if (config) {
		headerStyling = config.compositionServiceStylingEndpoint;
	}

	res.render('docs_landing', {
		sectionname: 'Docs',
		headerContent: headerContent,
		headerStyling: headerStyling,
		sidebarLinks: sidebarLinks,
		sidebarSelection: '/docs'
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