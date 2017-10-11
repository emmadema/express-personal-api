var mongoose = require('mongoose'),

Schema = mongoose.Schema;

var HikesSchema = new Schema({
	name : String,
	diffiuclty: String,
	length: String,
	elevationGain: String,
	location: String,
});

var Hikes = mongoose.model('Hikes', HikesSchema);

module.exports = Hikes;