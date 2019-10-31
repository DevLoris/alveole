const {SuperArrayCache} = require("../../../core/models/cachearray");

class Mlcache extends SuperArrayCache
{}

let cache = new Mlcache();

module.exports.ML_CACHE = cache;