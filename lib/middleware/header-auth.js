/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2014. All Rights Reserved.
 * 
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
"use strict";

// Modules

var nconf = require("nconf");
var errors = require("../utils/errors");
var userClient = require("../clients/user-client");

// Vars
var AuthenticationRequiredError = errors.AuthenticationRequiredError;

// Public Methods

module.exports = function(req, res, next) {
	var config = nconf.get("config");
	
	// Check whether auth is disabled
	if (config.disableHub) {
		res.locals.user = config.guestUserData;
		next();
		return;
	}

	console.log("Auth not disabled");
	
	// Determine whether we can bypass auth based on request query parameters
	var userid = req.query.userid;
	var username = req.query.username;

	console.log(req.query.userId);
	console.log(req.query.username);
	if (userid &&
			username) {
		res.locals.user = {
			"userId": userid,
			"name": username
		};
		next();
		return;
	}

	console.log("No previous auth in request params");
	
	// Do auth procedure. Get current user from user service endpoint.
	userClient.getCurrentUser(req, function(error, user) {
		if (error) {
			if (error instanceof AuthenticationRequiredError) {
				res.locals.user = config.guestUserData;
				console.log("AuthenticationRequiredError!");
			} else {
				res.locals.unexpectedOutage = true;
				res.locals.user = config.guestUserData;
				console.log("Using guestUserData");
			}
		} else {
			res.locals.user = user;
			console.log("Got current user: " + user.userId);
		}
		next();
	});
};

