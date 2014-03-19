/* We need marked to parse markdown and fs to read files.  This approach can be
 * slow.  A better (by more memory intensive) one would involve pre-parsing all
 * markdown prior to the app starting.  A good mesh would involve caching. All
 * of these are probably overkill, though, as this app is so simple and does non
 * blocking work.
 */
var marked = require("marked");
var fs = require("fs");
var config = require("../config.json");

module.exports = function(req, res){
    /* Render the requested document from markdown. */
    var id = req.params.id;

    /* Only allow simple template names. */
    if (id.match(/[^a-zA-Z0-9_]/)) {
	    res.send("Invalid document");
	    return;
    }
    
    /* Determine the path to the markdown file. */
    var markdownFile = "./docs/" + id + ".md";

    /* Read it and render it. */
    fs.exists(markdownFile, function (exists) {
    	if (exists) {
    		fs.readFile(markdownFile, "utf8", function (err, data) {
    			marked(data, function (err, content) {
    				res.render('document', { markdown: content, jazzhuburl: config.jazzhub.url });
    			});
    		});
    	} else {
    		console.log(markdownFile + ": File not found.");
    		res.send(404);
    	}
    });
    
    return;
};
