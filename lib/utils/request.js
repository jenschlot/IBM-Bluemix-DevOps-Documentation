/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2014. All Rights Reserved.
 * 
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
"use strict";

var authUtil = require("../utils/auth-util"),
	errors = require("../utils/errors"),
	httpUtil = require("../utils/http-util"),
	request = require("request");

var AuthenticationRequiredError = errors.AuthenticationRequiredError;

var requestNum = 1;

/**
 * A convenience wrapper around the request module that adds SSO authentication,
 * error handling, logging, and status code checking.
 * 
 * @see https://github.com/mikeal/request
 * @param options The options object for the underlying request call
 * @param req The inbound request, required to forward cookies for SSO
 * @param acceptedStatusCodes An array of acceptable status codes where the callback will be invoked;
 *	otherwise it will respond with an error
 * @param callback The usual callback, as per the request module
 * @param logger (Optional) A logger to use for logging requests and responses
 */
module.exports = function(options, req, acceptedStatusCodes, callback, logger) {
	var requestId = "#" + requestNum++;
	options.strictSSL = false;
	authUtil.addSSOToken(options, req);
	if (logger) {
		logRequest(options, logger, requestId);
	}
	var startTime = new Date();
	request(options, function(error, res, body) {
		var endTime = new Date();
		if (error) {
			var error2 = new Error("Error making request: " + error + "\n" + httpUtil.serializeRequest(options) + "\n" + error + "\n");
			callback(error2, res, body);
			return;
		}
		if (logger) {
			logResponse(res, logger, requestId, (endTime - startTime));
		}
		if (authUtil.isAuthChallenge(res)) {
			callback(new AuthenticationRequiredError(), res, body);
			return;
		}
		
		// check if response has an acceptable status code
		if (acceptedStatusCodes.indexOf(res.statusCode) !== -1) {
			callback(null, res, body);
		} else {
			var errorMsg = "Invalid response " + res.statusCode + " from request:\n" + httpUtil.serializeRequest(options) + "\n" + httpUtil.serializeResponse(res);
			var invalidResponseError = new Error(errorMsg);
			invalidResponseError.statusCode = res.statusCode;
			callback(invalidResponseError, res, body);
		}
	});
};

function logRequest(options, logger, requestId) {
	if (logger.isDebugEnabled()) {
		var requestStr = httpUtil.serializeRequest(options);
		logger.debug("request " + requestId + "\n" + requestStr);
	}
}

function logResponse(res, logger, requestId, duration) {
	if (logger.isDebugEnabled()) {
		var responseStr = httpUtil.serializeResponse(res);
		logger.debug("response " + requestId + " - " + duration + " ms\n" + responseStr);
	}
}
