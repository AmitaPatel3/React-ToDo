var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos');

var todoRouter = require('./routes/todos');

var Todo = require('./models/todo');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public')); //tells our server that everything in the folder 'public' is served as static files

app.set('view engine', 'ejs'); //we are configuring our app--telling our app how to handle this function--view our engine using ejs

app.get('/', function(req, res){  //we are then saying, app, here's the function--render the index
	res.render('index', {title: 'welcome to my app about todos'})				//linking to index.ejs
});


app.get('/todos', function(req,res) {					//linking to ejs file--bears.ejs
	res.render('todos', {todos: data})  //we are setting up our page---render all bears
});



var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {				//this is the same as app.post in 'bear files'
	console.log('something is happening!');
	next();
});


router.get('/', function(req, res) {
	res.json({title: 'hooray! it worked!'});
});




app.use('/api', todoRouter);  //this states that fill in api after //


app.listen(port, function() {
console.log('Magic happens on port' + port);
});