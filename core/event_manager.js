const EventEmitter = require('events');
const __ = require('lodash');

class EventManager extends EventEmitter {
    constructor() {
        super();
        this.events = [];
        this.setMaxListeners(200);
    };

    register(event_name, event_comportment) {
        if(__.isFunction(event_comportment)) {
            this.events.push({
                name: event_name,
                fct : event_comportment
            });
            this.on(event_name, event_comportment);
        }
    };

    unregister(event_name) {
        this.events = __.each(this.events, (value) => {
            this.removeListener(value.name, value.fct);
        });
        this.events = __.omit(this.events, (value) => {
            return value.name === event_name;
        })
    };
};


module.exports = EventManager;
