/* jshint node */

var routes = require('./routes'); 		// Load non-trivial route handlers.
var proxy = require('proxy-middleware');
var url = require('url');

var _ = require('underscore'); 			// Utility functions
var config = require('./config.json');  	// Configuration file.
var consolidate = require('consolidate');	// Provides a consistent template engine interface.
var express = require('express');		// Provides guts of the app.
var fs = require('fs');
var path = require('path');

var port = process.env.PORT;
var sslport = process.env.SSL_PORT;
var host = '0.0.0.0';				// Listen on all interfaces.

if (!port) {
	port = 3000;
}

var app = express();				// Create an app.

app.set('port', port)				// Store configuration in the app for later retrieval.
   .set('sslport', sslport)
   .set('host', host)
   .set('views', path.join(__dirname, 'views'))	// Templates are stored in the /views directory.
   .set('view engine', 'dust')			// Templates will be named *.dust.
   .engine('dust', consolidate.dust)		// Use dust as the template engine.
   .use(require('morgan')('dev')); 		// Log requests.


/*
 * Various ways to bring up the tutorials landing page.
 */
_.each(['/tutorials', '/tutorials/landing'],
       function(i) {
		app.get(i, routes.landing)
       }
);

/*
 * Depending on the request path, try to load and render the corresponding markdown source.
 * See config.json for a rundown of which prefixes load what.
 */
_.each(
	config.content,
	function (content) {
		app.use(
			content.uri_prefix, 
			routes.section_router(app.get('env'), 
					      content.section_name, 
					      path.join(__dirname, content.directory)
			)
		);
	}
);

/*
 * If nothing was rendered, defer to an arbitrary JazzHub server.  Because this app will be deployed
 * behind a proxy which only directs the routes above to it, the handler below will never 
 * be called while the app is on beta3, qa, or prod.  It's only used for local testing while the app
 * is not behind a proxy.
 */
app.use('/', proxy(url.parse(config.jazzhub.url)));

/*
 * Configure and start the server.
 */
if (app.get('port')) {
	server = require('http').createServer(app).listen(app.get('port'), function(){
		console.log('Express server listening for http connections on port #' + app.get('port'));
	});
}
if (app.get('sslport')) {
	server = require('https').createServer({
		key: fs.readFileSync('keys/server.key'),
		cert: fs.readFileSync('keys/server.crt')
	},app).listen(app.get('sslport'), function(){
		console.log('Express server listening for https connections on port #' + app.get('sslport'));
	});
}

/* Actually stand up a server with behavior governed by the express app configured above. */
server
