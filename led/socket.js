var client = require("socket.io-client");
var socket = client.connect("http://raspberrymain.local:8001");

socket.on('reset_alveoles', function () {
    const {BUTTON_LIST} = require("./button-list");
    console.log('RESET ALVEOLES')
    BUTTON_LIST.forEach((button) => {
        button.reset()
    })
})

module.exports.socket = socket;
