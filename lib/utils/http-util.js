/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2014. All Rights Reserved.
 * 
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
"use strict";

var nconf = require("nconf");

exports.getBasePath = function(req, config) {
	var parts = req.path.split("/");
	if (parts.length > 0) {
		var firstIdx = 0;
		if (parts[firstIdx] === "") {
			firstIdx = 1;
		}
		return config.contextPath + "/" + parts[firstIdx] + "/" + parts[firstIdx + 1];
	}
	return config.contextPath;
};

/**
 * Serializes the outgoing HTTP request described by the given "request" module options object.
 * Useful for printing out requests for debugging.
 */
exports.serializeRequest = function(options) {
	// request line
	var buf = [ (options.method || "GET"), " ", options.url, " HTTP/1.1\n" ];
	
	// headers
	if (options.json) {
		buf.push("Accept: application/json\n");
	}
	if (typeof options.json === "object") {
		buf.push("Content-Type: application/json\n");
	}
	for (var i in options.headers) {
		if (options.headers.hasOwnProperty(i)) {
			var value = options.headers[i];
			if (i.toLowerCase() === "cookie") {
				value = filterCookies(value);
			}
			buf.push(i, ": ", value, "\n");
		}
	}
	
	// body
	var body = options.body;
	if (!body && typeof options.json === "object") {
		body = JSON.stringify(options.json);
	}
	if (body) {
		buf.push("\n", filterBody(body), "\n");
	}
	return buf.join("");
};

/**
 * Serializes the response from an outgoing HTTP request. Useful for printing out requests for
 * debugging.
 */
exports.serializeResponse = function(res) {
	// status line
	var buf = [ "HTTP/", res.httpVersion, " ", res.statusCode, "\n"];
	
	// headers
	for (var i in res.headers) {
		if (res.headers.hasOwnProperty(i)) {
			buf.push(capitalizeHeaderName(i), ": ", res.headers[i], "\n");
		}
	}
	
	// body
	if (res.body) {
		var body = filterBody(typeof res.body === "object" ? JSON.stringify(res.body) : res.body);
		buf.push("\n", body, "\n");
	}
	return buf.join("");
};

/*
 * Capitalizes a lower-case header name, e.g. "set-cookie" -> "Set-Cookie". Response headers
 * are only provided in lower-case, for some reason.
 */
function capitalizeHeaderName(headerName) {
	if (headerName.indexOf("x-com-ibm") === 0) {
		return "X" + headerName.substring(1);
	}
	return headerName.replace(/([a-z])([a-z]*)/g, function(match, p1, p2) {
		return p1.toUpperCase() + p2;
	});
}

/*
 * Remove any sensitive information from request/response body.
 */
function filterBody(body) {
	if (typeof body === "string") {
		return body.replace(/("password":)"[^"]*"/g, "$1\"***\"");
	}
	return body;
}

/*
 * Remove any sensitive information from cookies.
 */
function filterCookies(cookies) {
	var authCookieName = nconf.get("config").authCookieName;
	var cookieRegex = new RegExp("(" + authCookieName + ")=[^;]+");
	return cookies.replace(cookieRegex, "$1=***");
}
