//THIS IS RESPONSIBLE FOR CRUD FOR ALL BEARS

var express = require('express')
var router = express.Router(); //express.Router is a method on express--everytime we create a new route we are using this router;created a new object which is a router , using a new express function, we need a new router object/setting up a road for the api which is a car
var Todo = require('../models/todo')


router.route('/todos')				//all these routers are /api routers--look at server.js ('port/api/bears)')	//we are grabbing the urlname (/bears) and we are using this function on this url
	.post(function(req,res) {							//creates a Bear
									//get, post, delete is an http verb

		var todo = new Todo();		//constructing a new Bear

		todo.name = req.body.name;			//coming from our request--from our form or from our Postman--our data lives in the "body--which is a method of request"
		todo.dueDate = req.body.dueDate;
		todo.description = req.body.description;



		todo.save(function(err,todo) {   //.save is a mongoose.model.save

											//at a high level, there is a request, and it comes back with a response
			if(err){
				console.log(err)
			} else {
				res.json(todo)				//returing the bear in json format
											//save the bear adn tell me if it worked or not

			}									//we are creating our resources/bear is our data which is one of our resource

		})
	})
		

	.get(function(req,res) {							//find all bears--finding the entire collection
		Todo.find(function(err,todos) {
			if(err) {
				console.log(err)
			} else {
				res.json(todos)							
			}
		})
	});


router.route('/todos/:todo_id')									//find a bear by ID
	.get(function(req,res) {
		Todo.findById(req.params.todo_id, function(err,todo) { //findById comes with mongoose, mongoose method which requires an error callback
			if (err) {												//req.params by id in the url//request is coming from our url
				console.log(err);
			} else {											//a callback is just a function--a function can take another function--ex. went to order a cup of coffee at Starbucks, call my name out and said your coffee is done, or we don't have coffee and go home
				res.json(todo);									//callback is really the function(err,bear)
			}
		})

	})


	.put(function(req,res) {										//changes a bear by finding it by ID
		Todo.findById(req.params.todo_id, function(err,todo) {
				if (err) {
				console.log(err);
				} else {
				todo.name = req.body.name ? req.body.name : todo.name;  //ternary expression (expression always returns a value)
				todo.dueDate = req.body.dueDate ? req.body.dueDate : todo.dueDate;
				todo.description = req.body.description ? req.body.description : todo.description;

					todo.save(function(err, newTodo) {
					if (err) {
						console.log(err);
					} else {
					res.json({message: 'Todo updated!'});
					}

				})
			}
		})
	})


	.delete(function(req,res) {											//delete bear by id
		Todo.remove({_id: req.params.todo_id}, function (err,todo){
			if(err) {
				console.log(err);
			} else {
			  res.json({title:'todo was successfully deleted!'});	
			}
		})
	});

module.exports = router;