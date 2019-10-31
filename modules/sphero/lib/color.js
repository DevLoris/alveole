class Color {
    constructor(red, green, blue, alpha = 1) {
        this.red = red;
        if(this.red > 1)
            this.red/=255;
        this.green = green;
        if(this.green > 1)
            this.green/=255;
        this.blue = blue;
        if(this.blue > 1)
            this.blue/=255;
        this.alpha = alpha;
    }

    getColor() {
        return [this.red, this.green, this.blue, this.alpha]
    }
}

module.exports.Color = Color;