var nconf = require('nconf');
var NavbarClient = require("../lib/clients/navbar-client.js");
var feedparser = require("feedparser");
var request = require("request");

var feedUrl = "https://developer.ibm.com/devops-services/category/whats-new/feed/";

var renderLearn = function(req, res, next, headerContent) {
	var config = require("../config").get("config");
	var sidebarLinks = require("../config.json").sidebarLinks;
	var headerStyling;

	if (config) {
		headerStyling = config.compositionServiceStylingEndpoint;
	}
	
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
				
		if (feedArray.length == 0)	{
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
	
	request.get({url: feedUrl, timeout: 5*60*1000}).on('error', function() {
	
		res.render('whatsnew_error', {
			sectionname: 'Docs',
			headerContent: headerContent,
			headerStyling: headerStyling,
			sidebarLinks: sidebarLinks,
			sidebarSelection: '/whatsnew',
			errorMessage: "An error occurred, the connection to the feed timed out."
		});
	}).pipe(fp);
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
			renderLearn(req, res, next, content);
		}
	});
	
};