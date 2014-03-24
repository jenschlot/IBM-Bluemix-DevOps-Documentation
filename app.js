
/**
 * Module dependencies.
 */

/* 
 * express - The MVC framework.
 * http - Defines an http server.
 * path - Utilities for manipulating paths.
 * cons - A compatibility layer between our template engine, dust and express.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var cons = require('consolidate');

/* Instantiate an express app. */
var app = express();

/* Set listen port. */
app.set('port', process.env.PORT || 3000);

/* Where may views be found.  Views are templates for rendered model data. */
app.set('views', path.join(__dirname, 'views'));

/* This is the engine that will be rendering our views. Note that views are
 * templates that render data for an end user. */

/* By default, when asked to render the view, `foo', look for `views/foo.dust' */
app.set('view engine', 'dust');

/* When asked to render the view `foo' and the file `views/foo.dust' is present,
 * use the Dust render engine. */
app.engine('dust', cons.dust);

/* Pulls in default middleware (helpers) for various things, from injecting
 * the favicon into response headers, logging connections, processing json,
 * and urlencoded request bodies, etc.
 */
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride()); // Not sure what this does.

app.use(app.router); // Not 100% sure what this does either.

var config = require('./config.json');

/* Set up the routing table.  The actual handlers for routes are in the ./routes directory.
 * index.js in this directory pulls in all of the required routes.
 */
var routes = require('./routes');
var middleware = [ 
	function(req, res, next) {
		req.config = config;
		next();
	},
	function(req, res, next) {
		req.documentPath = path.join(__dirname, 'docs', req.params[0]);
		next();
	},
	routes.documentdir,
	routes.document
];

app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.get(/^\/document(\/.*)$/, [ middleware ]);
app.get("/", function(req, res) { res.redirect("/document/"); });
app.get("/document", function(req, res) { res.redirect("/document/"); });


/* Pulls in a default error handler (in case requests fall through) but only on dev. */
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/* Actually stand up an http server with behavior governed by the express app configured above. */
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port #' + app.get('port'));
});
