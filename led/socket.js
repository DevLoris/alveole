var client = require("socket.io-client");
var socket = client.connect("http://192.168.2.12:8001");

module.exports.socket = socket;