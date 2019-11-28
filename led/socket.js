var client = require("socket.io-client");
const {BUTTON_LIST} = require("./button-list");
var socket = client.connect("http://raspberrymain.local:8001");

console.log(BUTTON_LIST);

socket.on('reset_alveoles', function () {
    console.log('RESET ALVEOLES')
    console.log(BUTTON_LIST);
    BUTTON_LIST.forEach((button) => {
        button.reset()
    })
})

module.exports.socket = socket;
