const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Experience = require('./models/experience')

//Establishing MongoDB
mongoose.connect('mongodb://localhost:27017/share2care', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
	console.log("Database connected");
})

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/show_experience', async(req, res) => {
	const experiences = await Experience.find({});
	res.render('experiences/index', {experiences});
});

app.listen(8080, () => {
	console.log('Caring on port 8080');
});


