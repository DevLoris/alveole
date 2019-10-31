const global = require("../../../core/global");

class Sphero {
    constructor(identifier){
        this.identifier = identifier
    }

    /**
     * @param {Move} move
     */
    move(move) {
        global.io.emit("sphero-move", this.identifier, move.heading, move.durationInSecond, move.speed)
    }

    /**
     * @param {SpheroMatrix} matrix
     */
    matrix(matrix) {
        console.log(this.identifier)
        global.io.emit("sphero-matrix", this.identifier, matrix.get())
    }
}

module.exports.Sphero = Sphero;