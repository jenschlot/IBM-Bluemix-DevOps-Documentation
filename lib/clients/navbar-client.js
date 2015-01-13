/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2014. All Rights Reserved.
 * 
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
"use strict";


var nconf = require("../../config");
var log4js = require("log4js");
var request = require("../utils/request");
var logger = log4js.getLogger("navbar-client");

// Constants

var _NAVBAR_SERVICE = "/navbar";


exports.getNavbar = function(args, req, callback) {

	var config = nconf.get("config");
	var url = config.compositionServiceEndpoint + _NAVBAR_SERVICE + "?login_redirect=" + encodeURIComponent(config.publicUri);
	var options = {
		url: url
	};

	// Add query parameters (if applicable)
	if (args) {
		options.qs = args;
	}

	request(options, req, [200], function(error, res, content) {
		if (error) {
			logger.error("Failed to get header content from context service");
			/*fall back to local header*/
			options.url = 	req.protocol + 		//point url to local header
							"://" +req.get("host") +
							config.contextPath +
							_NAVBAR_SERVICE; 

			request(options,req,[200],function(error,res,content){
				if(error){
					logger.error("Failed to get local header");
					// TODO: Return error header content via Dust template
				}
				else{
					callback(error, content);
				}
			},logger);
			/*fall back code ends here*/

		}
		else{
			callback(error, content);
		}
	}, logger);

};
