const {Color} = require("../color");
const {SpheroMatrix} = require("../sphero-matrix");

class SpheroJsonAnim {
    /**
     * @param name
     * @param {Sphero} on
     */
    static play(name, on) {
        let anim = require('../../data/' + name);
        if(anim.type === 'matrix') {
            anim.anim.forEach(v => {
                setTimeout(() => {
                    let colors = v.colors.map(color => {
                        return new Color(color[0], color[1], color[2])
                    });

                    let matrix = new SpheroMatrix(v.matrix, colors);

                    on.matrix(matrix);
                }, v.after)
            })
        }
        else  {
            anim.anim.forEach(v => {
                setTimeout(() => {
                    on.pixel(v.x, v.y, new Color(v.color[0], v.color[1], v.color[2]) );
                }, v.after)
            })
        }
    }
}

module.exports.SpheroJsonAnim = SpheroJsonAnim;