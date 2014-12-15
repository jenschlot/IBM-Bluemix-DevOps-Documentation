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
 * A collection of typed Errors for error handling.
 */

/**
 * An Error subclass that signals that authentication is required.
 */
function AuthenticationRequiredError() {}
AuthenticationRequiredError.prototype = new Error();

exports.AuthenticationRequiredError = AuthenticationRequiredError;

/**
 * Error used for sending HTTP 500 status error message to be shown in browser.
 * Used as a wrapper instead of changing the message on the inherited error object.
 */
function ServerError(message, error) {
	this.message = message;
	if (error) {
		this.stack = error.stack;
	}
}
ServerError.prototype = Error.prototype;

exports.ServerError = ServerError;