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
var errors = require("../utils/errors");
var userClient = require("../clients/user-client");

// Vars
var AuthenticationRequiredError = errors.AuthenticationRequiredError;

// Public Methods

module.exports = function(req, res, next) {
	var config = require("../../config").get("config");
	
	// Check whether auth is disabled
	if (config.disableHub) {
		res.locals.user = config.guestUserData;
		next();
		return;
	}
	
	// Determine whether we can bypass auth based on request query parameters
	var userid = req.query.userid;
	var username = req.query.username;

	if (userid &&
			username) {
		res.locals.user = {
			"userId": userid,
			"name": username
		};
		next();
		return;
	}
	
	// Do auth procedure. Get current user from user service endpoint.
	userClient.getCurrentUser(req, function(error, user) {
		if (error) {
			if (error instanceof AuthenticationRequiredError) {
				res.locals.user = config.guestUserData;
			} else {
				res.locals.unexpectedOutage = true;
				res.locals.user = config.guestUserData;
			}
		} else {
			res.locals.user = user;
		}
		next();
	});
};

