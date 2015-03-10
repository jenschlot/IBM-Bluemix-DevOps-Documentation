'use strict';

var express = require('express');
var _ = require('underscore');
var path = require('path');
var nconf = require('nconf');
var dust = require('dustjs-linkedin');
var NavbarClient = require('../lib/clients/navbar-client.js');

var renderResource = function(req, res, next, headerContent) {

	var config = require("../config").get("config");
	var sidebarLinks = require("../config.json").sidebarLinks;
	var headerStyling;

	if (config) {
		headerStyling = config.compositionServiceStylingEndpoint;
	}

	var dusted_markdown = "";
	dust.loadSource(require("../views/partials").compiled());
	dust.loadSource(dust.compile(req.rendered_markdown, "rendered_markdown"));
	dust.render("rendered_markdown", { something: "somethingelse" }, function(err, out) {
		dusted_markdown = out;

		res.render(
			'key_resource',
			{ 
				markdown: dusted_markdown,
				sectionname: req.sectionname,
				resourcename: req.resourcename,
				imgicon: req.imgicon,
				headerContent: headerContent,
				headerStyling: headerStyling,
				sidebarLinks: sidebarLinks,
				sidebarSelection: req.uriprefix
			}
		);
	});
}

module.exports =  function (env, section_name, resource_name, img_icon, uri_prefix, directory) {
	var router = express.Router();
	var markdown_middleware = require('jazzhub-markdown-middleware')(directory);
	var static_in_dir_middleware = express.static(directory);
	var less_in_public_middleware = require('less-middleware')(path.join(__dirname, '..', 'public'));
	var static_in_public_middleware = express.static(path.join(__dirname, '..', 'public'));
	var _GUEST_USER_ID = "jazzhubguest";

	var chain = [
		markdown_middleware.file,
		markdown_middleware.directory,
		function (req, res, next) {
			req.sectionname = section_name;
			req.resourcename = resource_name;
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
			
			
			var navbarSelection = 'navbar.entry.help.docs';
			if(req.resourcename === 'Support') {
				navbarSelection = 'navbar.entry.help.support';
			} else if((req.resourcename === 'Features') && (res.locals.user.userId === _GUEST_USER_ID)) {
				navbarSelection = 'navbar.entry.features';
			}

			var args = {
				"selection": navbarSelection,
				"userid": res.locals.user.userId,
				"username": res.locals.user.name,
				"ibmId": res.locals.user.ibmId
			};

			NavbarClient.getNavbar(args, req, function (error, content) {
				if (!error) {
					renderResource(req, res, next, content);
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