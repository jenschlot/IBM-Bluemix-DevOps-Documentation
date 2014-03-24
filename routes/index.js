/* Export an object, the fields of which are route handlers. */

exports.index = function(req, res){
  res.render('index', {});
};

exports.document = require("./document.js");
exports.documentdir = require("./documentdir.js");
