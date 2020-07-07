// ---- EXPRESS JS - Framework
let express = require('express'),
    app = express();

// Gestion Files System
let fs = require('fs'),
    path = require('path');


// --- middleware
// - body-parser needed to catch and to treat information inside req.body
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// - Gestion des vues
let helpers 	= require('view-helpers'),
	consolidate = require('consolidate');

app.engine('html', consolidate['mustache']);
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');

// ------------------------
// RESOURCE PATIENT
// ------------------------
// --- Base de donnees
let mongoose = require('mongoose');

let database  = mongoose.connect("mongodb://localhost/pizza",{
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true
});

// --- Definition du models
//--- Module dependencies
const Schema	 	= mongoose.Schema;

//------------------------------------------- Resources Schema
PizzaSchema = new Schema({
    id : String,
    nom : { type : String, required : true},
    desc : String,
    ingredients : { type : String, required : true},
    qt : { type : String, required : true}
});

mongoose.model('Pizza', PizzaSchema);

app.get('/pizzas',(req, res)=>{
	let Pizza = mongoose.model('Pizza')
	Pizza.find({}).then((result)=>{
            res.status(200).json(result)
        },(err)=>{
            res.status(400).json(err)
        })
})

app.post('/pizzas',(req, res)=>{
	let Pizza = mongoose.model('Pizza');
	let myPizza = new Pizza(req.body);
        myPizza.save().then((result)=>{
            res.status(200).json(myPizza)
        },(err)=>{
            res.status(400).json(err)
        })
})
// --- TO DO ...
app.get('/pizzas/:idPizza',(req, res)=>{
	res.status(200).json(temp.pop())
})

app.put('/pizzas/:idPizza',(req, res)=>{
	res.status(204).json()
})

app.delete('/pizzas/:idPizza',(req, res)=>{
	res.status(204).json()
})


let IngredientSchema = new Schema({
    id : String,
    nom : { type : String, required : true},
    mesure : { type : String, required : true},
    desc : { type : String, required : true},
    tmp_cuisson : { type : String, required : true}
});

mongoose.model('Ingredient', IngredientSchema);

app.get('/ingredients',(req, res)=>{
	let Patient = mongoose.model('Ingredient')
	Patient.find({}).then((result)=>{
            res.status(200).json(result)
        },(err)=>{
            res.status(400).json(err)
        })
})

app.post('/ingredients',(req, res)=>{
	let Pizza = mongoose.model('Ingredient');
	let myPizza = new Pizza(req.body);
        myPizza.save().then((result)=>{
            res.status(200).json(myPizza)
        },(err)=>{
            res.status(400).json(err)
        })
})
// --- TO DO ...
app.get('/ingredients/:idIngredient',(req, res)=>{
	res.status(200).json(temp.pop())
})

app.put('/ingredients/:idIngredient',(req, res)=>{
	res.status(204).json()
})

app.delete('/ingredients/:idIngredient',(req, res)=>{
	res.status(204).json()
})

// ------------------------
// ROUTES VUES
// ------------------------
app.get('/',(req,res)=>{
    res.render('index.html',{message : req.query.message})
});


// ------------------------
// START SERVER
// ------------------------
app.listen(3000,function(){
    console.info('HTTP server started on port 3000');
});