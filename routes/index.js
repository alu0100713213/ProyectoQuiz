var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.param('quizId', quizController.load);
router.get('/quizes',                        quizController.index);
router.get('/quizes/:quizId(\\d+)',          quizController.show);
router.get('/quizes/:quizId(\\d+)/answer',   quizController.answer);

module.exports = router;
