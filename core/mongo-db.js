const mongoose = require('mongoose');
const global = require('./global');
require('dotenv').config();

let connection = mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true});
global.db = connection;

module.exports.Mongo = connection;