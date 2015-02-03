var express = require('express');
var _ = require('underscore');
var path = require('path');
var nconf = require('nconf');
var NavbarClient = require('../lib/clients/navbar-client.js');

var renderReference = function(req, res, next, headerContent) {
	var config = require("../config").get("config");
	var headerStyling;
	var sidebarLinks = require("../config.json").sidebarLinks;

	if (config) {
		headerStyling = config.compositionServiceStylingEndpoint;
	}

	res.render(
		'quick_reference',
		{ 
			markdown: req.rendered_markdown,
			sectionname: req.sectionname,
			parentname:  req.parentname,
			parenturi:  req.parenturi,
			resourcename: req.resourcename,
			imgicon: req.imgicon,
			headerContent: headerContent,
			headerStyling: headerStyling,
			sidebarLinks: sidebarLinks,
			sidebarSelection: req.uriprefix
		}
	);
}

module.exports =  function (env, section_name, resource_name, parent_name, parent_uri, img_icon, uri_prefix, directory) { 
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
			req.resourcename = resource_name;
			req.parentname = parent_name;
			req.parenturi = parent_uri;
			req.imgicon = img_icon;
			req.uriprefix = uri_prefix;
			next();
		},
		less_in_public_middleware,
		static_in_dir_middleware,
		static_in_public_middleware,
		function(req, res, next) {
			if (!req.rendered_markdown)
				return next();
			
			var navbarSelection = ((req.resourcename === 'Support') ? 'navbar.entry.help.support' : 'navbar.entry.help.docs');

			var args = {
				"selection": navbarSelection,
				"userid": res.locals.user.userId,
				"username": res.locals.user.name,
			};

			NavbarClient.getNavbar(args, req, function (error, content) {
				if (!error) {
					renderReference(req, res, next, content);
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
