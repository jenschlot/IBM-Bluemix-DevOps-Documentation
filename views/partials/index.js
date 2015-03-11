/* jshint node: true */
'use strict';

var _ = require('underscore'),
	fs = require('fs'),
	path = require('path'),
	dust = require('dustjs-linkedin');

module.exports.compiled_markdown = function() {
	var compiled = [];
	_.each(fs.readdirSync(__dirname), function (f) {
		if (path.extname(f) !== '.md') {
			return;
		}
		var stem = path.basename(f, '.md');
		var mdString = fs.readFileSync(path.join(__dirname, f), { encoding: 'utf8' });
		console.log(mdString);
		console.log('partials/' + stem);
		compiled.push(dust.compile(mdString, 'partials/' + stem));
	});
	return compiled;
};

