var _ = require('underscore');
var fs = require('fs');
var path = require('path');


_.each(fs.readdirSync(__dirname), function (f) {
	var stem = path.basename(f, '.js');

	if (f !== 'index.js' && stem !== f) {
		module.exports[stem] = require(path.join(__dirname, f));
	}

	return null;
});
