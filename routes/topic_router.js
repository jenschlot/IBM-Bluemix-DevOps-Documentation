var express = require('express');
var _ = require('underscore');
var path = require('path');
var nconf = require('nconf');
var NavbarClient = require('../lib/clients/navbar-client.js');

var renderTopic = function(req, res, next, headerContent) {
	var config = require("../config").get("config");
	var headerStyling;

	if (config) {
		headerStyling = config.compositionServiceStylingEndpoint;
	}

	res.render(
		'topic',
		{ 
			markdown: req.rendered_markdown,
			sectionname: req.sectionname,
			lowercaseSectionName: req.sectionname.toLowerCase(),
			topicname: req.topicname,
			imgicon: req.imgicon,
			headerContent: headerContent,
			headerStyling: headerStyling
		}
	);
}

module.exports =  function (env, section_name, topic_name, img_icon, directory) {
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
			req.topicname = topic_name;
			req.imgicon = img_icon;
			next();
		},
		less_in_public_middleware,
		static_in_dir_middleware,
		static_in_public_middleware,
		function(req, res, next) {
			if (!req.rendered_markdown)
				return next();

			var args = {
				"selection": 'navbar.entry.help.docs',
				"userid": res.locals.user.userId,
				"username": res.locals.user.name,
			};

			NavbarClient.getNavbar(args, req, function (error, content) {
				if (!error) {
					renderTopic(req, res, next, content);
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

