class Loadable {
    constructor() {
        this.loaded = [];
    }

    loadAll() {}

    loadOne() {}

    has(index) {
        return this.loaded[index] !== null
    }

    get(index) {
        return this.has(index) ? this.loaded[index] : null;
    }

    set(index, data) {
        this.loaded[index] = data;
    }
}

module.exports = Loadable;