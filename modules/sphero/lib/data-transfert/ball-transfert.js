const {SPHERO_CACHE} = require("../spherocache");

class BallTransfert {
    constructor(from_ball, to_ball, callback) {
        this.from_ball = from_ball;
        this.to_ball = to_ball;
        this.callback = callback;
    }

    call() {
        this.callback(SPHERO_CACHE.get(this.from_ball), SPHERO_CACHE.get(this.to_ball));
    }
}

module.exports.BallTransfert = BallTransfert;