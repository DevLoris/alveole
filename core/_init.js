let global = require('./global');
let register_module = require('./register_module');
let event_manager = require('./event_manager');
let io = require('socket.io');
let debug = require('./debug');
let mode = require('./vars/mode');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const Twig = require('twig');
const events = require("./vars/events");
require('dotenv').config();

if(process.env.RASP === "oui") {
    const {JOYSTICKS} = require("../modules/gpio/joystick-list");
    const {BUTTONS} = require("../modules/gpio/button-list");
}
const fileupload = require("express-fileupload");

module.exports = (app) => {
    const registerModules = new register_module(app);

    //On modifie le comportement de express
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(fileupload());

    const cache = (process.env.MODE === mode.DEVELOPMENT) ? {} : { maxAge:  86400000 * 30};

    registerModules.registerPublicFolders().forEach((v) => {
        app.use('/assets/' + v.name, express.static(v.folder, cache));
    });
    app.use('/assets', express.static(path.join(__dirname, '../public/'), cache));

    app.set('views', registerModules.registerViewsFolders());

    if(process.env.FILE_COMPILE === 'twig') {
        //Twig
        app.set('view engine', 'twig');
        app.set("twig options", {
            allow_async: true,
            strict_variables: false
        });
    }
    else {
        app.set('view engine', 'pug');
    }

    //Disable caches
    if(process.env.MODE === mode.DEVELOPMENT) {
        app.set('cache', false);
        app.set('view cache', false);
        Twig.cache(false);
    }

    let server =  app.listen(process.env.SERVER_PORT, () => {
        //Message de démarrage
        let port = server.address().port;
        console.log("\x1b[31m",'[SERVER STATUS] Server running at port ' + port, "\x1b[0m");

        //Setup de Socket
        global.io = io(server);
        //On ajoute le Cookie Parser en Socket
        const cookieParserSock = require('socket.io-cookie-parser');
        global.io.use(cookieParserSock());

        //Setup du server en global
        global.server = server;

        //On prépare un manager d'événement
        global.event_manager = new event_manager();

        //On load automatiquement les événements etc.
        registerModules.registerEvents();
        registerModules.registerRoutes();
        registerModules.registerSockets();
        registerModules.registerLoadables();

        //Call an event
        global.event_manager.emit(events.events_names.START);

        debug.DEBUG();
    });
};
