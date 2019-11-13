const {LIST} = require('./led-list'); //use GPIO pin 4, and specify that it is output
const  app = require('http').createServer((req, res) => {res.write('test')});
const io = require('socket.io')(app);
app.listen(3000);
require('dotenv').config();

io.on('connection', function (client) {
    client.on('led_on', function (id) {
        if(LIST[id])
            LIST[id].on();
    });
    client.on('led_off', function (id) {
        if(LIST[id])
            LIST[id].off();
    });
});