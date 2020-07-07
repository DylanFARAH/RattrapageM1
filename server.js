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
/*let helpers 	= require('view-helpers'),
	consolidate = require('consolidate');

app.engine('html', consolidate['mustache']);
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');*/

// ------------------------
// ROUTES RESOURCES
// ------------------------
var temp = [{
	"id" : "1",
	"nom" : "bolo",
	"desc" : "pizza a base de sauce tomates et viandes hachées",
    "ingredients" : "sauce tomate, viande hachée, fromage, olive, oignon",
    "qt" : 5
}]

app.get('/pizzas',(req, res)=>{
	res.status(200).json(temp)
})

app.post('/pizzas',(req, res)=>{
	temp.push(req.body)
	res.status(200).json(req.body)
})

app.get('/pizzas/:idPizza',(req, res)=>{
	res.status(200).json(temp.pop())
})

app.put('/pizzas/:idPizza',(req, res)=>{
	res.status(204).json()
})

app.delete('/pizzas/:idPizza',(req, res)=>{
	res.status(204).json()
})

// ------------------------
// ROUTES VUES
// ------------------------
/*app.get('/',(req,res)=>{
    res.render('index',{message : req.query.message})
});*/


// ------------------------
// START SERVER
// ------------------------
app.listen(3000,function(){
    console.info('HTTP server started on port 3000');
});