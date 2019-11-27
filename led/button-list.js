const {LIST} = require('./led-list');
const {Button} = require('./button');

const BUTTON_LIST = {
    0 : new Button(1, 26, LIST["0"]),
    1 : new Button(2, 17, LIST["1"]),
    2 : new Button(3, 4, LIST["2"]),
};

module.exports.BUTTON_LIST = BUTTON_LIST;
