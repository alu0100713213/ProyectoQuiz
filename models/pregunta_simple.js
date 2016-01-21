var Pregunta = require('../models/pregunta.js');
var EJS = require('ejs');

function SeleccionSimple(x, array){
	Pregunta.call(this);
	this.pregunta_ = x;
	this.array_ = array;
	this.area_;

	var self=this;
	EJS.renderFile('views/quizes/pregunta_simple.ejs',{array:this.array_}, function(err,html){
	if(err)throw err;
	else self.area_ = html;
	});
	
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
