const {LIST} = require('./led-list');
const {Button} = require('./button');

const BUTTON_LIST = {
    0 : new Button(1, 18, LIST["0"]),
    1 : new Button(2, 19, LIST["1"]),
    2 : new Button(3, 20, LIST["2"]),
};

module.exports.BUTTON_LIST = BUTTON_LIST;