const {LIST} = require('./led-list');
const {Button} = require('./button');

const BUTTON_LIST = {
    0 : new Button(18, LIST["0"]),
};

module.exports.BUTTON_LIST = BUTTON_LIST;