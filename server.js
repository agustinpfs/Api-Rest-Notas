// para tener acceso a la info que nos envía un 
// cliente, usamos el módulo body parser, evalúa
// el cuerpo de una solicitud y va a extraer 
// la info

/**
	* dependencies
	*/
var express = require('express')
var bodyParser = require('body-parser')

/**
	* local variables
	*/

var server = express()
var db = {}

/**
	* middelware
	*/
// como nuestra api solo va a recibir json le pedimos explícitamente 
// que utilize el parser de json.
server.use(bodyParser.json('application/json'))


/**
	* routes
	*/

server.post('/notas', function(req, res){
	console.log('POST',req.body.nota)
	var notaNueva = req.body.nota
	notaNueva.id = 123

	db[notaNueva.id] = notaNueva

	res
		.status(201)
		// .send({}) //express al detectar un objeto vacío lo convierte en json
		.json({
			nota: notaNueva
		})
})

server.get('/notas/:id?', function(req, res){
	console.log('GET /notas/%s', req.params.id)
	var id = req.params.id
	var nota = db[id]

	res.json({
		notas: nota
	})

})


// var app = express()
if (!module.parent){
server.listen(3000, function(){
	console.log('hola, estoy escuchando desde http://localhost:3000')
 })
  }else{
	module.exports = server
 }
