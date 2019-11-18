const global = require("../../../core/global");

class Spark {
    /**
     * @desc Pour arrêter le drone
     */
    static stop() {
        global.io.emit("spark-stop")
    }

    /**
     * @desc Pour changer toutes les couleurs des leds à partir d'une matrice définie
     * @param {SpheroMatrix} matrix
     */
    static playPhotoSequence() {
        global.io.emit("spark-photo")
    }
}

module.exports.Spark = Spark;