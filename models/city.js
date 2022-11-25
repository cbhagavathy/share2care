const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: String,
    state: String
});

module.exports = mongoose.model('City', CitySchema);