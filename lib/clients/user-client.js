/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2014. All Rights Reserved.
 * 
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
"use strict";

/**
 * A convenience client for the current user service on JazzHub.
 */

var nconf = require("../../config");
var log4js = require("log4js");
var request = require("../utils/request");
var logger = log4js.getLogger("user-client");

/**
 * Calls the current user service from JazzHub. The first argument of the callback is an error object,
 * which is defined only if there was an error, and the second argument is an object of the form:
 * {
 *    userId: "userId",
 *    name: "User Name",
 *    email: "user@email.com"
 * }
 * 
 * e.g.
 * userClient.getCurrentUser(req, function(error, user) {
 *    if (error) {
 *       console.log("Error: " + error);
 *       return;
 *    }
 *    console.log("User ID is: " + user.userId);
 * });
 * 
 * @param req The original incoming request, needed to propagate SSO
 * @param callback The callback to handle the response
 */
exports.getCurrentUser = function(req, callback) {
	var options = {
		url: nconf.get("config").userServiceEndpoint,
		json: true
	};
	request(options, req, [200], function(error, res, user) {
		if (!error && (!user.userId || !user.name)) {
			callback(new Error("Invalid response from current user service: Missing at least one of two required fields \"userId\", \"name\":\n" + JSON.stringify(user)));
			return;
		}
		callback(error, user);
	}, logger);
};
