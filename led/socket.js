var client = require("socket.io-client");
var socket = client.connect("http://raspberrymain.local:8001");

setTimeout(function() {
    console.log(socket)
}, 2000)


module.exports.socket = socket;
