var Pregunta = require('../models/pregunta.js');

function SeleccionSimple(x, array){
	Pregunta.call(this);
	this.pregunta_ = x;
	this.array_ = array;
}

SeleccionSimple.prototype = new Pregunta();
SeleccionSimple.prototype.constructor = SeleccionSimple;
SeleccionSimple.prototype.vista = function(){
	var vista=[];

	for(var i=0; i<this.array_.length; i++){
		vista[i] = "<option>"+this.array_[i] + "</option>";
	}

	vista.unshift("<select name='respuesta'>");
	vista.push("</select>");
	
	return vista;
	
}

SeleccionSimple.prototype.get_pregunta = function (){
	return this.pregunta_;
}

module.exports = SeleccionSimple;
