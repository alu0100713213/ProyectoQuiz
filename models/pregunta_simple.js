var Pregunta = require('../models/pregunta.js');


function SeleccionSimple(x, array){
	Pregunta.call(this);
	this.pregunta_ = x;
	this.array_ = array;
	
/**	this.area = "<select name='respuesta[]'>";
	for(var i=0; i<array.length; i++){
		this.area += "<option value='" + this.array_[i] + "'>" + this.array_[i] + "</option>";
	}
	this.area += "</select>";*/
}

SeleccionSimple.prototype = new Pregunta();
SeleccionSimple.prototype.constructor = SeleccionSimple;

SeleccionSimple.prototype.get_pregunta = function (){
	return this.pregunta_;
}

SeleccionSimple.prototype.get_area = function(){
	return this.area_;
}


module.exports = SeleccionSimple;
