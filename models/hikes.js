let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let HikesSchema = new Schema({
	name : String,
	diffiuclty: String,
	length: String,
	elevationGain: String,
	location: String
});

let Hikes = mongoose.model('Hikes', HikesSchema);

module.exports = Hikes;