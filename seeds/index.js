const { default: mongoose } = require('mongoose');
const Experience = require('../models/experience');
const City = require('../models/city');
const fs = require('fs')
const parse = require('csv-parse');

mongoose.connect('mongodb://localhost:27017/share2care', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("Databsae Connected");
})

const seedExperienceDB = async() => {
    await Experience.deleteMany({});
    //Looping through input files
    let csvToJson = require('convert-csv-to-json');
    let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("experiences.csv");
    for(let i=0; i<json.length;i++){
        const e = new Experience( {   
            'name' : json[i]['Name'],
            'date': json[i]['Date'],
            'place': json[i]['Place'],
            'city': json[i]['City'],
            'state': json[i]['State'],
            'category': json[i]['Category'],
            'subCategory': json[i]['SubCategory'],
            'shortDescr': json[i]['ShortDescr'],
            'longDescr': json[i]['LongDescr'],
        });
        console.log(e);
        await e.save();
    }
}

const seedCityDB = async() => {
    await City.deleteMany({});

    //Looping through input files
    let csvToJson = require('convert-csv-to-json');
    let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("cities.csv");
    for(let i=0; i<json.length;i++){
        const c = new City( {   
            'name' : json[i]['City'],
            'state': json[i]['State'],
        });
        console.log(c);
        await c.save();
    }
}

seedExperienceDB()
seedCityDB()

