/* jshint node */

/**
 * Module dependencies.
 */

/* 
 * express - The MVC framework.
 * https - Defines an https server.
 * path - Utilities for manipulating paths.
 * cons - A compatibility layer between our template engine, dust and express.
 */
var fs = require('fs');
var express = require('express');
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
var tutorials_markdown_middleware = require('jazzhub-markdown-middleware')(path.join(__dirname, 'tutorials'));
var whatsnew_markdown_middleware = require('jazzhub-markdown-middleware')(path.join(__dirname, 'whatsnew'));
var faq_markdown_middleware = require('jazzhub-markdown-middleware')(path.join(__dirname, 'help', 'faq'));
var features_markdown_middleware = require('jazzhub-markdown-middleware')(path.join(__dirname, 'features'));

app
 .use(config_middleware) // loads global app configuration.
 .get('/tutorials', [ config_middleware, routes.landing ])
 .get('/tutorials/landing', [ config_middleware, routes.landing ])
 .use('/tutorials', express.favicon(path.join(__dirname, 'public', 'favicon.ico'))) // serve up a favicon on request.
 .use(express.logger('dev')) // log each connection to the standard output.
 .use(express.json()) // pre-parses json request bodies.
 .use(express.urlencoded()) // pre-parses urlencoded request bodies.
 .use(express.methodOverride()) // for clients that don't support the HTTP methods, uses a header as an override.
 .use('/whatsnew', whatsnew_markdown_middleware.file) // compiles the requested path as markdown if a ... .md file exists.
 .use('/whatsnew', whatsnew_markdown_middleware.directory) // compiles the requested path as markdown if .../index.md exists.
 .use('/tutorials', tutorials_markdown_middleware.file) // compiles the requested path as markdown if a ... .md file exists.
 .use('/tutorials', tutorials_markdown_middleware.directory) // compiles the requested path as markdown if .../index.md exists.
 .use('/features', features_markdown_middleware.file) // compiles the requested path as markdown if a ... .md file exists.
 .use('/features', features_markdown_middleware.directory) // compiles the requested path as markdown if .../index.md exists.
 .use('/help/faq', faq_markdown_middleware.file) // compiles the requested path as markdown if a ... .md file exists.
 .use('/help/faq', faq_markdown_middleware.directory) // compiles the requested path as markdown if .../index.md exists.
 .use('/help/faq', function (req, res, next) {
	req.sectionname="Help";
	next();
 })
 .use('/whatsnew', function (req, res, next) {
	req.sectionname="What's New";
	next();
 })
 .use('/tutorials', function (req, res, next) {
	req.sectionname="Tutorials";
	next();
 })
 .use('/features', function (req, res, next) {
	req.sectionname="Features";
	next();
 })
 .use(routes.render_markdown) // renders markdown if any was compiled.
 .use('/tutorials', require('less-middleware')(path.join(__dirname, 'public'))) // compiles less stylesheets into css.
 .use('/tutorials', express.static(path.join(__dirname, 'public'))) // serves up static content if it exists in public/
 .use('/tutorials', express.static(path.join(__dirname, 'tutorials'))) // serves up static content if it exists in tutorials/
 .use('/whatsnew', express.static(path.join(__dirname, 'whatsnew'))) // serves up static content if it exists in whatsnew/
 .use('/features', express.static(path.join(__dirname, 'features'))) // serves up static content if it exists in features/
 .use('/help/faq', express.static(path.join(__dirname, 'help', 'faq'))) // serves up static content if it exists in help/faq/
// DO NOT leave the directory middleware in in production.

/* Pulls in a default error handler (in case requests fall through) but only on dev. */
if ('development' == app.get('env')) {
  app
   .use('/tutorials', express.errorHandler()) // provides nice looking errors.
   .use('/tutorials', express.directory(path.join(__dirname, 'docs'))); // provides directory indexing for files in docs.
}

/* Proper error handler. */
app.use('/tutorials', function (req, res) { 
	res.status(404).render('404_temp');
//	res.end(req.path + ": File not found");
});
app.use('/whatsnew', function (req, res) {
	res.status(404).render('404_template');
//	res.status(404);
//	res.end(req.path + ": File not found");
});
app.use('/help/faq', function (req, res) { 
	res.status(404).render('404_template');
//	res.status(404);
//	res.end(req.path + ": File not found");
});
app.use('/features', function (req, res) { 
	res.status(404).render('404_template');
//	res.status(404);
//	res.end(req.path + ": File not found");
});


/* While doing internal testing, direct all un-handled requests to JazzHub. 
 * Where this app is behind the proxy, this handler will never be called.
 */
app.use(function (req, res) { 
	res.redirect(config.jazzhub.url + req.url.replace(/^\/*/, ''));
});

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

/* Actually stand up an https server with behavior governed by the express app configured above. */
server.listen(app.get('port'), function(){
  console.log('Express server listening on port #' + app.get('port'));
});
