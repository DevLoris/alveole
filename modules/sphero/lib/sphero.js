const global = require("../../../core/global");

class Sphero {
    constructor(identifier){
        this.identifier = identifier
    }

    move(heading, duration, speed) {
        global.io.emit("sphero-move", this.identifier, heading, duration, speed)
    }

    matrix(matrix) {
        console.log(this.identifier)
        global.io.emit("sphero-matrix", this.identifier, matrix.get())
    }
}

module.exports.Sphero = Sphero;