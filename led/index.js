const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello dev.to!\n');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});

const io = require('socket.io')(server);

const {LIST} = require('./led-list'); //use GPIO pin 4, and specify that it is output

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