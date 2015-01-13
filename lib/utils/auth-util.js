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
var _ = require("underscore");

var AUTH_MSG = "x-com-ibm-team-repository-web-auth-msg";
var AUTH_REQUIRED = "authrequired";

var getSSOAuthCookieString = 
    exports.getSSOAuthCookieString = function (req) {
	var authCookieNames = nconf.get("config").authCookieNames;
	var authCookies = _.pick(req.cookies, authCookieNames);

	if (authCookies.length === 0) {
		return;
	}

	/* create a semi-colon delimited list of cookie name=value pairs */
	var authCookieString = _.map(authCookies, function (value, key) {
		return key + "=" + value;
	}).join(";");

	return authCookieString;
};

/**
 * Adds the SSO token from the given incoming requets to the options object of the outgoing
 * request (to be used with the request module).
 */
exports.addSSOToken = function(options, req) {
	if (!options.headers) 
		options.headers = {};

	var authCookieString = getSSOAuthCookieString(req);

	options.headers.Cookie = (options.headers.Cookie ? options.headers.Cookie + ";" : "") + authCookieString;
};

/**
 * Returns whether or not the given response represents an authentication challenge.
 */
exports.isAuthChallenge = function(res) {
	return res.statusCode === 401 || res.headers[AUTH_MSG] === AUTH_REQUIRED;
};