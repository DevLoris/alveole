var client = require("socket.io-client");
var socket = client.connect("http://raspberrymain.local:8001");

socket.on('reset_alveoles', function () {
    console.log('RESET ALVEOLES')
    Object.values(BUTTON_LIST).forEach((button) => {
        button.reset()
    })
})

module.exports.socket = socket;
