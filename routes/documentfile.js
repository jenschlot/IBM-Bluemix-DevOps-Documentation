/* We need marked to parse markdown and fs to read files.  This approach can be
 * slow.  A better (by more memory intensive) one would involve pre-parsing all
 * markdown prior to the app starting.  A good mesh would involve caching. All
 * of these are probably overkill, though, as this app is so simple and does non
 * blocking work.
 */
var marked = require("marked");
var fs = require("fs");
var path = require("path");

module.exports = function(req, res, next){
    /* Determine the path to the markdown file. */
    var markdownFile = path.join(req.documentPath);

    if (!markdownFile.match(/\.md$/)) {
	markdownFile = markdownFile + ".md";
    }

    /* Read it and render it. */
    fs.exists(markdownFile, function (exists) {
	if (!exists) {
		next();
		return;
	}

	fs.readFile(markdownFile, "utf8", function (err, data) {
		if (err) {
			next();
			return;
		}

		marked(data, function (err, content) {
			res.render('document', { markdown: content, jazzhuburl: req.config.jazzhub.url });
		});
		
	});
    });
};
