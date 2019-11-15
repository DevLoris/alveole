const global = require("../../../core/global");

class Sphero {
    constructor(identifier, allowed = false){
        this.identifier = identifier
        this.allowMove = allowed
        this.transfering = false
    }

    toggleMove(allow_move) {
        this.allowMove = allow_move;

        global.io.emit("sphero-toggle-move", this.identifier, allow_move)
    }

    /**
     * @desc Pour faire bouger la boule dans une direction précie (en degré) à une vitesse définie
     * @param {Move} move
     */
    move(move) {
        if(this.allowMove)
            global.io.emit("sphero-move", this.identifier, move.heading, move.speed)
    }

    /**
     * @desc Pour arrêter la double
     */
    stopMove() {
        global.io.emit("sphero-stop-move", this.identifier)
    }

    /**
     * @desc Pour changer toutes les couleurs des leds à partir d'une matrice définie
     * @param {SpheroMatrix} matrix
     */
    matrix(matrix) {
        global.io.emit("sphero-matrix", this.identifier, matrix.get())
    }
    /**
     * @desc Pour changer un pixel sur la matrice de led de la boule
     * @param {int} x
     * @param {int} y
     * @param {Color} color
     */
    pixel(x, y, color) {
        global.io.emit("sphero-pixel", this.identifier, x, y, color.getColor())
    }

    /**
     * @desc Active un effet glitch temporaire sur la boule
     * todo Ajouter la gestion du temps depuis la signature de la fonction
     */
    glitch() {
        global.io.emit('sphero-glitch', this.identifier);
    }

    /**
     * @desc Active un effet glitch temporaire sur la boule
     */
    doCircle() {
        global.io.emit('sphero-circle', this.identifier);
    }
}

module.exports.Sphero = Sphero;