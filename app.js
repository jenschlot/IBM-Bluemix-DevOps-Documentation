/* jshint node */

var routes = require('./routes'); 		// Load non-trivial route handlers.
var proxy = require('proxy-middleware');
var url = require('url');


var nconf = require("./config").get("config");
var cookieParser = require('cookie-parser');
var headerAuth = require('./lib/middleware/header-auth.js');

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

app.use(cookieParser());

app.set('port', port)				// Store configuration in the app for later retrieval.
   .set('sslport', sslport)
   .set('host', host)
   .set('views', path.join(__dirname, 'views'))	// Templates are stored in the /views directory.
   .set('view engine', 'dust')			// Templates will be named *.dust.
   .engine('dust', consolidate.dust)		// Use dust as the template engine.
   .use(require('morgan')('dev')); 		// Log requests.

app.use('', headerAuth);


app.get(['/tutorials', '/tutorials/landing'], function(req, res){
  res.redirect('/docs/all/#tut');
});

app.get(['/docs/reference', '/reference'], function(req, res){
  res.redirect('/docs/all/#ref');
});

app.get(['/help/faq'], function(req, res){
  res.redirect('/docs/faq');
});

_.each(['/docs'],
       function(i) {
		app.get(i, routes.docs)
       }
);

_.each(['/learn', '/learn/what', '/learn/cost',],
	function(i) {
		app.get(i, routes.learn_router);
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
					      content.uri_prefix,
					      path.join(__dirname, content.directory)
			)
		);
	}
);

_.each(
	config.resource,
	function (resource) {
		app.use(
			resource.uri_prefix, 
			routes.resource_router(app.get('env'), 
					      resource.section_name,
					      resource.resource_name, 
					      resource.img_icon,
					      resource.uri_prefix,
					      path.join(__dirname, resource.directory)
			)
		);
	}
);

_.each(
	config.reference,
	function (reference) {
		app.use(
			reference.uri_prefix, 
			routes.reference_router(app.get('env'), 
					      reference.section_name,
					      reference.resource_name,
					      reference.parent_name, 
					      reference.parent_uri, 
					      reference.img_icon,
					      reference.uri_prefix,
					      path.join(__dirname, reference.directory)
			)
		);
	}
);

_.each(
	config.topic,
	function (topic) {
		app.use(
			topic.uri_prefix, 
			routes.topic_router(app.get('env'), 
					      topic.section_name,
					      topic.topic_name,
					      topic.img_icon,
					      topic.uri_prefix,
					      path.join(__dirname, topic.directory)
			)
		);
	}
);

/*
	If the requested url begins with the routes covered by the app but there is no page to render
	above, then render a 404 from this app. This will prevent a beta3/qa/prod redirect loop
*/
_.each(
	config.appBaseRoutes,
	function (baseRoute) {
		app.use(baseRoute.routeName, 
			function (req, res, next) {
				res.status(404);
				res.sendfile(path.join(__dirname, 'views', '404_template.html'));
			}
		);
	}
);

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
