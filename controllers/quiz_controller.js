var models = require('../models/models.js');
var Quiz = models.Quiz;

exports.load = function(req, res, next, quizId) {
  Quiz.find(quizId).then( 
      function(quiz) {
        if (quiz) {
          req.quiz = quiz;
          next();
        } else { next(new Error('No existe quizId = '+quizId)); }
      }
      ).catch( function(error) { next(error); });
};

exports.show = function(req, res) {
	models.Quiz.find(req.params.quizId).then(function(quiz){
	res.render('quizes/show', {quiz: quiz});
	})
};

exports.answer = function(req, res) {
  var respuesta = 'Incorrecto';
  if (req.query.respuesta === req.quiz.respuesta) respuesta = 'Correcto'; 
  res.render('quizes/answer', { quiz: req.quiz, respuesta: respuesta })
};

exports.index = function(req, res) {
  Quiz.findAll().then(function(quizes){
    res.render('quizes/index.ejs', { quizes: quizes});
  }).catch(function(error) { next(error); });
};


