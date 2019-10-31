class SpheroMatrix {
    /**
     * @param {[[int]]} matrix
     * @param {[Color]} color_list
     */
    constructor(matrix, color_list) {
        this.matrix = matrix;
        this.color_list = color_list;
    }

    get() {
        return [this.matrix, this.color_list.map(v => v.getColor())]
    }

}

module.exports.SpheroMatrix = SpheroMatrix;