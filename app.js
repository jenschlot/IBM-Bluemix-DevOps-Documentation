
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

app.use(app.router); // Not 100% sure what this does either.


/* Defines an Express middleware for tacking configuration details to a request. */
var config = require('./config.json');
var config_middleware = function(req, res, next) {
	req.config = config;
	next();
};


/* Set up the routing table.  The actual handlers for routes are in the ./routes directory.
 * index.js in this directory pulls in all of the required routes.
 */
var routes = require('./routes');
var markdown_middleware = require('jazzhub-markdown-middleware')(path.join(__dirname, 'docs'));

app
 .use(config_middleware) // loads global app configuration.
 .get('/', [ config_middleware, routes.landing ])
 .get('/landing', [ config_middleware, routes.landing ])
 .use(express.favicon(path.join(__dirname, 'public', 'favicon.ico'))) // serve up a favicon on request.
 .use(express.logger('dev')) // log each connection to the standard output.
 .use(express.json()) // pre-parses json request bodies.
 .use(express.urlencoded()) // pre-parses urlencoded request bodies.
 .use(express.methodOverride()) // for clients that don't support the HTTP methods, uses a header as an override.
 .use(markdown_middleware.file) // compiles the requested path as markdown if a ... .md file exists.
 .use(markdown_middleware.directory) // compiles the requested path as markdown if .../index.md exists.
 .use(routes.render_markdown) // renders markdown if any was compiled.
 .use(require('less-middleware')(path.join(__dirname, 'public'))) // compiles less stylesheets into css.
 .use(express.static(path.join(__dirname, 'public'))) // serves up static content if it exists in public/
 .use(express.static(path.join(__dirname, 'docs'))) // serves up static content if it exists in docs/
// DO NOT leave the directory middleware in in production.

/* Pulls in a default error handler (in case requests fall through) but only on dev. */
if ('development' == app.get('env')) {
  app
   .use(express.errorHandler()) // provides nice looking errors.
   .use(express.directory(path.join(__dirname, 'docs'))); // provides directory indexing for files in docs.
}

/* Actually stand up an http server with behavior governed by the express app configured above. */
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port #' + app.get('port'));
});
