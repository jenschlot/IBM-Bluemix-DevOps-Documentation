/* jshint node: true */
'use strict';

var _ = require('underscore'),
	fs = require('fs'),
	path = require('path'),
	dust = require('dustjs-linkedin');

module.exports = {
	compiled: function() {
		var compiled = [];
		_.each(fs.readdirSync(__dirname), function (f) {
			if (path.extname(f) !== '.md') {
				return;
			}
			var stem = path.basename(f, '.md');
			compiled += dust.compile(f, 'partials/' + stem);
		});
		return compiled;
	}
};

