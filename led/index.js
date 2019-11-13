const {LIST} = require('./led-list'); //use GPIO pin 4, and specify that it is output
const io = require('socket.io');
const express = require('express');
require('dotenv').config();

let server = express().listen(process.env.SERVER_PORT, () => {
    let port = server.address().port;
    console.log("\x1b[31m",'[SERVER STATUS] Server running at port ' + port, "\x1b[0m");

    let socket_io = io(port);
    socket_io.io.on('connection', function (client) {
        client.on('led_on', function (id) {
            if(LIST[id])
                LIST[id].on();
        });
        client.on('led_off', function (id) {
            if(LIST[id])
                LIST[id].off();
        });
    })
});