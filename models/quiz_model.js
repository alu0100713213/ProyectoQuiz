var AbstractQuiz = require('../models/abstract_quiz_model.js');

function Quiz() {

  AbstractQuiz.call(this);

  this.q.push(

    { pregunta: '¿Qué cantidad de huesos tiene en total el ser humano?',
      respuesta: function(x) {
        return (/\s*206\s*$/i).exec(x);
      }
    },

    { pregunta: '¿En que se especializa la cartografía?',
      respuesta: function(x) {
        return (/\s*mapas\s*$/i).exec(x);
      }
    },

    { pregunta: 'El triangulo que tiene sus tres lados igualees ¿Como se llama?',
      respuesta: function(x) {
        return (/\s*equilatero\s*$/i).exec(x);
      }
    },
 
    { pregunta: '¿Quién es el padre del psicoanalisis?',
      respuesta: function(x) {
        return (/\s*sigmund freud\s*$/i).exec(x);
      }
    }

  );

  // insertar unas cuantas preguntas sobre
  // la tabla de multiplicar
  var self  = this;
  for(var i = 0; i<3;i++) {
    (function() {
      var n1 = Math.randomInt(9)+1;
      var n2 = Math.randomInt(9)+1;
      self.q.push(
        { pregunta: '¿ '+n1+'x'+n2+" ?",
          respuesta: function(x) {
            return (x == n1*n2);
        }
      })
    })();
  }
}

Quiz.prototype = new AbstractQuiz();
Quiz.prototype.constructor = Quiz;

Quiz.prototype.numQuestions = function() {
  return this.q.length;
}

Quiz.prototype.getQ = function(x){
  return this.q[x]['pregunta'];
}

module.exports = Quiz;