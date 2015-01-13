var nconf = require("nconf");

nconf
 .env({ separator: "__"})
 .file("custom", __dirname + "/config/app-" + process.env.NODE_ENV + ".json")
 .file("default", __dirname + "/config/app.json");

module.exports = nconf;