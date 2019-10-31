const StaticPublic = require("./models/static_public");

const fs = require('fs');
const __ = require('lodash');
const io = require('./global');
const path = require('path');

class RegisterModules {
    constructor(app) {
        this.app = app;
    }
    static getModuleList() {
        return (fs.readdirSync('./modules/'));
    }
    registerViewsFolders() {
        console.log('\x1b[92m','\x1b[1m','[Loading] View folders are loaded','\x1b[0m');
        let modules = RegisterModules.getModuleList();

        let folders = [];
        __.each(modules, (v) => {
            if (fs.existsSync('./modules/' + v + '/views/')) {
                folders.push(path.join(__dirname, '../modules/' +v+ '/views/'));
            }
        });

        return folders;
    }
    registerPublicFolders() {
        console.log('\x1b[92m','\x1b[1m','[Loading] View folders are loaded','\x1b[0m');
        let modules = RegisterModules.getModuleList();

        let folders = [];
        __.each(modules, (v) => {
            if (fs.existsSync('./modules/' + v + '/public/')) {
                folders.push(new StaticPublic(v, path.join(__dirname, '../modules/' +v+ '/public/')));
            }
        });

        return folders;
    }
    registerSockets() {
        let modules = RegisterModules.getModuleList();
        __.each(modules, (v) => {
            if(fs.existsSync('./modules/' + v + '/io/')) {
                let files =  (fs.readdirSync('./modules/' + v + '/io/'));
                __.each(files, (f) =>  {
                    require('./../modules/' + v + '/io/' + f )(io.io);
                });
            }
        });
        console.log('\x1b[92m','\x1b[1m','[Loading] IO Connections are loaded','\x1b[0m');
    }
    registerEvents() {
        let modules = RegisterModules.getModuleList();
        __.each(modules, (v) => {
            if(fs.existsSync('./modules/' + v + '/events/')) {
                let files =  (fs.readdirSync('./modules/' + v + '/events/'));
                __.each(files, (f) =>  {
                    require('./../modules/' + v + '/events/' + f )(io.event_manager);
                });
            }
        });
        console.log('\x1b[92m','\x1b[1m','[Loading] Events are loaded','\x1b[0m');
    }

    registerLoadables() {
        let modules = RegisterModules.getModuleList();
        __.each(modules, (v) => {
            if(fs.existsSync('./modules/' + v + '/loads/')) {
                let files =  (fs.readdirSync('./modules/' + v + '/loads/'));
                __.each(files, (f) =>  {
                    let x = require('./../modules/' + v + '/loads/' + f );
                    x.loadAll();
                });
            }
        });
        console.log('\x1b[92m','\x1b[1m','[Loading] Loadables are loaded','\x1b[0m');
    }

    registerRoutes() {
        let modules = RegisterModules.getModuleList();
        __.each(modules, (v) => {
            if(fs.existsSync('./modules/' + v + '/routes/')) {
                let files =  (fs.readdirSync('./modules/' + v + '/routes/'));
                __.each(files, (f) =>  {
                    let r = require('./../modules/' + v + '/routes/' + f );
                    this.app.use("/"+ r.name, r.content);
                });
            }
        });
        console.log('\x1b[92m','\x1b[1m','[Loading] Events are loaded','\x1b[0m');
    }
}

module.exports = RegisterModules;