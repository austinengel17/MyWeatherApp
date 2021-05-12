//Loading modules into memory
const express = require('express');
const bodyParser = require('body-parser');

//Loading local modules
const credentials = require('./apiCredentials.json');
const weatherController = require("./controllers/weatherController");
const homepageController = require("./controllers/homepageController");



//Set up express app
const app = express();

//setting template engine
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
app.use(bodyParser.json());

homepageController(app);
weatherController(app);

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
});

