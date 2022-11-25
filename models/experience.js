const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    name: String,
    date: Date, 
    place: String,
    city: String,
    state: String, 
    category: String,
    subCategory: String, 
    shortDescr: String,
    longDescr: String
});

module.exports = mongoose.model('Experience', ExperienceSchema);
