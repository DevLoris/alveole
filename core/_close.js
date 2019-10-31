let shutdown = require('./shutdown');
const events = require("./vars/events");
let {event_manager} = require('./global');


module.exports = (app) => {
    shutdown(() => {
        event_manager.emit(events.events_names.STOP);
    })
};