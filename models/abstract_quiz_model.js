var AbstractQuiz = require('../models/abstract_quiz_model.js');

function Quiz(){

	AbstractQuiz.call(this);
	
	this.q.push(
	
	{ pregunta: '¿Qué cantidad de huesos tiene en total el ser humano?,
	  respuesta: function(x) {
		return (206).exec(x);
		}
	}
	);

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;
	
Quiz.prototype.numQuestions = function() {
	return this.q.length;
}

Quiz.prototype.getQ = function(x){
	return this.q[x]['pregunta'];
}

module.exports = Quiz;

