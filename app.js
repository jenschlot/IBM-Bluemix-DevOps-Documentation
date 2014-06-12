/* jshint node */

var routes = require('./routes'); 		// Load non-trivial route handlers.

var _ = require('underscore'); 			// Utility functions
var config = require('./config.json');  	// Configuration file.
var consolidate = require('consolidate');	// Provides a consistent template engine interface.
var express = require('express');		// Provides guts of the app.
var fs = require('fs');
var path = require('path');

var port = process.env.PORT;
var host = '0.0.0.0';				// Listen on all interfaces.

if (!port) {
	port = 3000;
}

var app = express();				// Create an app.

app.set('port', port)				// Store configuration in the app for later retrieval.
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
 */
app.use('/tutorials', routes.section_router(app.get('env'), 'Tutorials', path.join(__dirname, 'tutorials')))
   .use('/help/faq', routes.section_router(app.get('env'), 'Help', path.join(__dirname, 'help', 'faq')))
   .use('/whatsnew', routes.section_router(app.get('env'), "What's New", path.join(__dirname, 'whatsnew')))
   .use('/features', routes.section_router(app.get('env'), "Features", path.join(__dirname, 'features')))
   .use('/maintenance', routes.section_router(app.get('env'), "Maintenance Schedule", path.join(__dirname, 'maintenance')));

/*
 * If nothing was rendered, defer to an arbitrary JazzHub server.  Because this app will be deployed
 * behind a proxy which only directs the routes above to it, the handler below will never 
 * be called while the app is on beta3, qa, or prod.  It's only used for local testing while the app
 * is not behind a proxy.
 */
app.use(
	// Any requests outside of the ones above will be deferred to JazzHub
	function (req, res, next) {
		res.redirect(config.jazzhub.url + req.url.replace(/^\/*/, ''));

	}
);

/*
 * Configure and start the server.
 */
var server;

if (process.env.VCAP_APPLICATION) {
	/* We're probably running on Bluemix */
	server = require('http').createServer(app);
} else {
	server = require('https').createServer({
		key: fs.readFileSync('keys/server.key'),
		cert: fs.readFileSync('keys/server.crt')
	},app);
}

/* Actually stand up a server with behavior governed by the express app configured above. */
server.listen(app.get('port'), function(){
  console.log('Express server listening on port #' + app.get('port'));
});
