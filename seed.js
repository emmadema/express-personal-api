// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000/api');

var hikes = [
{"id": 0, "name": "Mount Audubon Trail", "difficulty": "Hard", "length": "7.6 miles", "elevationGain": "2,667 ft", "location": "Indian Peaks Wilderness Area, Ward, CO"},
{"id": 1, "name": "Mowhawk Lakes", "difficulty": "Moderate", "length": "8.9 miles", "elevationGain": "2,185 ft", "location": "Breckenridge, CO"},
{"id": 2, "name": "Sky Pond", "difficulty": "Hard", "length": "8.4 miles", "elevationGain": "1,833 ft", "location": "Rocky Mountain National Park, Estes Park, CO"},
{"id": 3, "name": "South Bolder Peak Trail", "difficulty": "Hard", "length": "7.8 miles", "elevationGain": "3,090 ft", "location": "Boulder, CO"}
];

//var new_hike = {description: "Sharp rocks. Middle of nowhere."};

db.Hikes.create(new_hike, function(err, hikes){
	if (err){
		return console.log("Error:", err);
	}
	console.log("Created new hike yo", hikes._id);
	process.exit(); // we're all done! Exit the program.
});
