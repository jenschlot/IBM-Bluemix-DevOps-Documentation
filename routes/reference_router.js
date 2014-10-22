var express = require('express');
var _ = require('underscore');
var path = require('path');

module.exports =  function (env, section_name, resource_name, parent_name, parent_uri, img_icon, directory) { 
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
			next();
		},
		less_in_public_middleware,
		static_in_dir_middleware,
		static_in_public_middleware,
		function(req, res, next) {
			if (!req.rendered_markdown)
				return next();
			var section_name = ((req.resourcename === 'Support') ? 'Support' : 'Docs');
			var navbarSelection = ((req.resourcename === 'Support') ? 'support' : 'docs');
			res.render(
				'quick_reference',
				{ 
					markdown: req.rendered_markdown,
					sectionname: section_name,
					parentname:  req.parentname,
					parenturi:  req.parenturi,
					resourcename: req.resourcename,
					imgicon: req.imgicon,
					navbarSelection: navbarSelection
				}
			);
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
