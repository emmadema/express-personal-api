let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let HikeSchema = new Schema({
	name : String,
	diffiuclty: String,
	length: String,
	elevationGain: String,
	location: String
});

let Hike = mongoose.model('Hike', HikeSchema);

module.exports = Hikes;