var mongoose = require('mongoose');
var Schema = mongoose.Schema; //mongoose.Schema is a method on mongoose

var TodoSchema = new Schema({  //it's a constructor function--making a schema like a model to tell it what to do with bears
	name: String,
	dueDate: String,
	description: String 	//don't put a comma at the end of the Schema object
});

module.exports = mongoose.model('Todo', TodoSchema); 

