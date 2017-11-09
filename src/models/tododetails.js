var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TasksSchema = new Schema({
	name: { type: String, unique: true, required: true },
	completed: { type: Boolean, default: false}
})
var Tasks = mongoose.model('Tasks', TasksSchema);

module.exports = Tasks;
