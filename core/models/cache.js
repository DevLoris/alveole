class SuperCache {
    constructor(data = {}) {
        this.cache = data;
    }

    get(key)  {
        return this.cache[key];
    }

    set(key, value) {
        this.cache[key] = value;
    }

    has(key){
        return this.cache[key] != null;
    }
}

module.exports.SuperCache  = SuperCache;