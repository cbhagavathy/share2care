const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('<center><h1>Welcome to Share2Care</h1></center>');
});

app.listen(8080, () => {
	console.log('Caring on port 8080');
});


