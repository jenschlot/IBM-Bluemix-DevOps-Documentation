var nconf = require('nconf');
var NavbarClient = require("../lib/clients/navbar-client.js");
var feedparser = require("feedparser");
var request = require("request");

var config = nconf.get("config");
var feedUrl = config.feedUrl;
var FIVE_SECONDS = 5*1000;

var renderWhatsNew = function(req, res, next, headerContent) {

	var sidebarLinks = require("../config.json").sidebarLinks;
	var headerStyling;

	if (config) {
		headerStyling = config.compositionServiceStylingEndpoint;
	}
	
	request.get({url: feedUrl, timeout: FIVE_SECONDS}).on('error', function() {
	
		res.render('whatsnew_error', {
			sectionname: 'Docs',
			headerContent: headerContent,
			headerStyling: headerStyling,
			sidebarLinks: sidebarLinks,
			sidebarSelection: '/whatsnew',
			errorMessage: "An error occurred, the connection to the feed timed out."
		});
	}).pipe(initializeFeedParser());
	
	
	function initializeFeedParser() {
		var feedArray = [];
		
		var fp = feedparser();
		
		fp.on('readable', function() {
			var stream = this;
			var item;

			while (item = stream.read()) {
				feedArray.push(item);
			}
		});
		
		fp.on('end', function() {
					
			if (feedArray.length === 0)	{
				res.render('whatsnew_error', {
					sectionname: 'Docs',
					headerContent: headerContent,
					headerStyling: headerStyling,
					sidebarLinks: sidebarLinks,
					sidebarSelection: '/whatsnew',
					errorMessage: "An error occurred, the feed is empty."
				});
			} else {
			
				res.render('whatsnew', {
					sectionname: 'Docs',
					headerContent: headerContent,
					headerStyling: headerStyling,
					sidebarLinks: sidebarLinks,
					sidebarSelection: '/whatsnew',
					feedItems: feedArray
				});
			}
		});
	
		return fp;
	}
}


module.exports = function (req, res, next) {

	var args = {
		"selection": "navbar.entry.help.docs",
		"userid": res.locals.user.userId,
		"username": res.locals.user.name,
		"ibmId": res.locals.user.ibmId
	};

	NavbarClient.getNavbar(args, req, function (error, content) {
		if (!error) {
			renderWhatsNew(req, res, next, content);
		}
	});
	
};