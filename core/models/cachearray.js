class SuperArrayCache {
    constructor(data = []) {
        this.cache = data;
    }

    get(key)  {
        return this.cache[key];
    }

    push(value) {
        this.cache.push(value);
    }
}

module.exports.SuperArrayCache  = SuperArrayCache;