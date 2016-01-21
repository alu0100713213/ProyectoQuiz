var AbstractQuiz = require('../models/abstract_quiz_model.js');
var Respuesta = require('../models/respuesta.js');
var PreguntaLarga = require('../models/pregunta_larga.js');
var PreguntaCorta = require('../models/pregunta_corta.js');
var SeleccionSimple = require('../models/pregunta_simple.js');
var SeleccionMultiple = require('../models/pregunta_multiple.js');

function Quiz() {

  AbstractQuiz.call(this);

  this.q.push(

    { pregunta: new PreguntaCorta('¿Qué cantidad de huesos tiene en total el ser humano?'),
      respuesta: new Respuesta(/\s*206\s*$/i)
    },

    { pregunta: new PreguntaCorta('¿En que se especializa la cartografía?'),
      respuesta: new Respuesta(/\s*mapas\s*$/i)
    },

    { pregunta: new PreguntaCorta('El triangulo que tiene sus tres lados igualees ¿Como se llama?'),
      respuesta: new Respuesta(/\s*equilatero\s*$/i)
    },
 
    { pregunta: new PreguntaLarga('¿Quién es el padre del psiconalisis?'),
      respuesta: new Respuesta(/\s*sigmund freud\s*$/i)
    }, 

    { pregunta: new SeleccionSimple('¿Cual es el unico mamifero capaz de volar?', ['Murcielago','Zorro','Jirafa']),
      respuesta: new Respuesta('Murcielago')
    }
  );
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

Quiz.prototype.numQuestions = function() {
  return this.q.length;
}

Quiz.prototype.getQ = function(x){
  return this.q[x]['pregunta'].get_pregunta();
}

Quiz.prototype.getQuestion = function(x) {
	return x['pregunta'].get_pregunta();
}

Quiz.prototype.getArea = function(x) {
	return x['pregunta'].get_area();
}

module.exports = Quiz;
