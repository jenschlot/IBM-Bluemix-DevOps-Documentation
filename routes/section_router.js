var express = require('express');
var _ = require('underscore');
var path = require('path');
var nconf = require('nconf');
var NavbarClient = require('../lib/clients/navbar-client.js');


var renderSection = function(req, res, next, headerContent) {
	var config = require("../config").get("config");
	var sidebarLinks = require("../config.json").sidebarLinks;
	var headerStyling;

	if (config) {
		headerStyling = config.compositionServiceStylingEndpoint;
	}

	res.render(
		'document',
		{ 
			markdown: req.rendered_markdown,
			sectionname: 'Docs',
			navbarSelection: 'docs',
			headerContent: headerContent,
			headerStyling: headerStyling,
			sidebarLinks: sidebarLinks,
			selected_uri_prefix: req.path
		}
	);
}

module.exports =  function (env, section_name, directory) {
	var router = express.Router();
	var markdown_middleware = require('jazzhub-markdown-middleware')(directory);
	var static_in_dir_middleware = express.static(directory);
	var less_in_public_middleware = require('less-middleware')(path.join(__dirname, '..', 'public'));
	var static_in_public_middleware = express.static(path.join(__dirname, '..', 'public'));

	var chain = [
		markdown_middleware.file,
		markdown_middleware.directory,
		function (req, res, next) {
			req.sectionname = section_name;
			next();
		},
		less_in_public_middleware,
		static_in_dir_middleware,
		static_in_public_middleware,
		function(req, res, next) {
			if (!req.rendered_markdown)
				return next();

		var args = {
			"selection": "navbar.entry.help.docs",
			"userid": res.locals.user.userId,
			"username": res.locals.user.name,
		};

		NavbarClient.getNavbar(args, req, function (error, content) {
			if (!error) {
				renderSection(req, res, next, content);
			}
		});

		},
		function (req, res) {
			res.status(404);
			res.sendfile(path.join(__dirname, '..', 'views', '404_template.html'));
		}
	];

	if (env == 'development') {
		chain = chain.concat([
			require('errorhandler')(),
		])
	}

	_.each(chain, function (i) {
		router.use(i);
	});

	return router;
};

