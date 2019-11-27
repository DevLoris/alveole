var client = require("socket.io-client");
var socket = client.connect("raspberrymain.local:8001");

module.exports.socket = socket;
