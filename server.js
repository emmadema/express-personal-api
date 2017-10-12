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

var hikes = [
{"id": 0, "name": "Mount Audubon Trail", "difficulty": "Hard", "length": "7.6 miles", "elevationGain": "2,667 ft", "location": "Indian Peaks Wilderness Area, Ward, CO"},
{"id": 1, "name": "Mowhawk Lakes", "difficulty": "Moderate", "length": "8.9 miles", "elevationGain": "2,185 ft", "location": "Breckenridge, CO"},
{"id": 2, "name": "Sky Pond", "difficulty": "Hard", "length": "8.4 miles", "elevationGain": "1,833 ft", "location": "Rocky Mountain National Park, Estes Park, CO"},
{"id": 3, "name": "South Bolder Peak Trail", "difficulty": "Hard", "length": "7.8 miles", "elevationGain": "3,090 ft", "location": "Boulder, CO"}
];

var profile =[
{
  "name": "Emma",
  "github_link": "https://github.com/emmadema/express-personal-api.git",
  "current_city": "Denver, CO",
  "pets": pets
}
];

var pets = [
  {
    "name": "Nemo (toad)",
    "type": "Cat",
    "breed": "Ragamuffin"
  },
  {
    "name": "Malcolm",
    "type": "Cat",
    "breed": "Tuxedo"
  }
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

//INDEX
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

//INDEX
//get all the profile info
//http://localhost:3000/api/profile
app.get('/api/profile', function  profileArray(req, res){
  console.log(profile[0]);
  res.json(profile[0]);
});

//INDEX
//gets all the hikes
//http://localhost:3000/api/hikes
app.get('/api/hikes', function allHikes(req, res){
  res.json(hikes);
});
//this works with the array

//SHOW
//shows one hikle by ID
//http://localhost:3000/api/hikes/3
app.get('/api/hikes/:id', function oneHike(req, res){
  console.log(hikes.length);
  console.log(req.params.id);
  for(var i=0; i < hikes.length; i++){
    console.log(hikes[i].id);
    if(hikes[i].id == req.params.id){
      res.json(hikes[i]);
    }
  }
});
//this works with the array

//CREATE
//creates one hike
//http://localhost:3000/api/hikes
app.post('/api/hikes', function createHike(req, res){
  hikes.push(req.body);
  res.json(req.body);
});
//

//PUT
//updates any info in a hike
//http://localhost:3000/api/hikes
app.put('/api/hikes/:id', function updateHike(req, res){
  for(var i=0; i < hikes.length; i++){
    if(hikes[i].id == req.params.id){
      hikes[i].name = req.body.name;
      hikes[i].diffiuclty = req.body.difficulty;
      hike[i].length = req.body.length;
      hikes[i].elevationGain = req.body.elevationGain;
      hikes[i].location = req.body.location;
      
    }
    return res.json(hikes[i]);
  }

});

//DELETE
//deletes a hike
////http://localhost:3000/api/hikes/2
app.delete('/api/hikes/:id', function deleteHike(req, res){
  for( var i=0; i < hikes.length; i++){
    if(hikes[i].id == req.params.id) {
      delete hikes[i];
      return res.json("Hike deleted");
    }
  }

});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
