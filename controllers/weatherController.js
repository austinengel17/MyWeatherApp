
const unirest = require('unirest');
const credentials = require('../apiCredentials.json');


module.exports = function(app){


    app.get('/weather', function (req, res){
        lon = req.query.lon;
        lat = req.query.lat;

        var request = unirest("GET", `https://dark-sky.p.rapidapi.com/${lat},${lon}`);

        request.query({
            "lang": "en",
            "units": "us"
        });

        request.headers({
            "x-rapidapi-key": credentials.apiKey,
            "x-rapidapi-host": "dark-sky.p.rapidapi.com",
            "useQueryString": true
        });


        request.end(function (response) {
            if (response.error) throw new Error(response.error);
            console.log(response.body.currently.summary);
            res.render('weather', {qs: response.body.currently});
        });
    });
}