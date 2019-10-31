const {SuperCache} = require("../../../core/models/cache");

class SpheroCache extends SuperCache
{}

let cache = new SpheroCache();

module.exports.SPHERO_CACHE = cache;