var fs = require('fs');
var path = require('path');

module.exports = function (req, res, next) {
  fs.readdir(req.documentPath, function (err, fileNames) {
	if (err) { 
		next();
		return;
	}

	var indexDoc = path.join(req.documentPath, 'landing.md');

	fs.exists(indexDoc, function(exists) {
		if (exists) {
			req.documentPath = indexDoc;
			next();
			return;
		}

		var fileObjects = [];
		var i;
		for(i=0; i<fileNames.length; i++) {
			fileObjects[i] = { name: fileNames[i], path: path.join(req.path, fileNames[i].replace('.md', '')) };
		}

		res.render('documentdir', { path: req.path, files: fileObjects, jazzhuburl: req.config.jazzhub.url });
	});
  });
};
