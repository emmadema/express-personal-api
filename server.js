// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect("mongod://localhost/hikes");

/************
 * DATABASE *
 ************/

var db = require('./models');

var hikes =[
{"id": 0, "name": "Mount Audubon Trail", "diffiuclty": "Hard", "length": "7.6 miles", "elevationGain": "2,667 ft", "location": "Indian Peaks Wilderness Area, Ward, CO"},
{"id": 1, "name": "Mowhawk Lakes", "diffiuclty": "Moderate", "length": "8.9 miles", "elevationGain": "2,185 ft", "location": "Breckenridge, CO"},
{"id": 2, "name": "Sky Pond", "diffiuclty": "Hard", "length": "8.4 miles", "elevationGain": "1,833 ft", "location": "Rocky Mountain National Park, Estes Park, CO"},
{"id": 3, "name": "South Bolder Peak Trail", "diffiuclty": "Hard", "length": "7.8 miles", "elevationGain": "3,090 ft", "location": "Boulder, CO"}
];

/**********
 * ROUTES *
 **********/


// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/emmadema/express-personal-api.git", // CHANGE ME
    base_url: "http://stark-coast-26914.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "about me"}, // CHANGE ME
      {method: "POST", path: "/api/hikes", description: "log a new hike"} // CHANGE ME
    ]
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
