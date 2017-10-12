// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_hike = {description: "Sharp rocks. Middle of nowhere."};

db.Hikes.create(new_hike, function(err, hikes){
	if (err){
		return console.log("Error:", err);
	}
	console.log("Created new hike yo", hikes._id);
	process.exit(); // we're all done! Exit the program.
});
