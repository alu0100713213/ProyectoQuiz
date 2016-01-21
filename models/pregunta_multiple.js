var Pregunta = require('../models/pregunta.js');
var EJS = require('ejs');

function SeleccionMultiple(x,array){
	Pregunta.call(this);
	this.pregunta_ = x;
	this.array_ = array;
	this.area_;
	var self=this;
	
	EJS.renderFile('views/quizes/pregunta_multiple.ejs',{array: this.array_}, function(err,html){
	if(err) throw err;
	else self.area_ = html;
});
}

SeleccionMultiple.prototype = new Pregunta();
SeleccionMultiple.prototype.constructor = SeleccionMultiple;

/**SeleccionMultiple.prototype.vista = function (){
	var vista = [];
	for(var i=0; i<this.array_.length;i++){
		vista[i] = "<option>" + this.array_[i] + "</option>";
	}

	vista.unshift("<select name='respuesta[]' size=" + this.array_.length + "multiple>");
	vista.push("</select>");

	return vista;
}
*/
SeleccionMultiple.prototype.get_pregunta = function(){
	return this.pregunta_;
}

module.exports = SeleccionMultiple;

