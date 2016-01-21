var path = require('path');

var databaseURL = process.env.DATABASE_URL          || 'sqlite://:@:/quiz';
var databaseStorage  = process.env.DATABASE_STORAGE || 'quiz.sqlite';
var url = databaseURL.match(/(.*):\/\/(.*):(.*)@(.*):(.*)\/(.*)/);
var DB_name  = (url[6] || null); console.log("DB_name: "+DB_name);
var user     = (url[2] || null); console.log("database user: "+user);
var pwd      = (url[3] || null); console.log("password: "+pwd);

var protocol = (url[1] || null); console.log("protocol: "+protocol);
var dialect  = protocol;         console.log("dialect: "+dialect);
var port     = (url[5] || null); console.log("port: "+port);
var host     = (url[4] || null); console.log("host: "+host);
var storage  = databaseStorage;  console.log("database storage: "+storage);

// Modelo ORM
var Sequelize = require('sequelize');
var sequelize = new Sequelize('sqlite://@:/', { storage: storage });
var quiz_path = path.join(__dirname, 'quiz');
var Quiz = sequelize.import(quiz_path);

exports.Quiz = Quiz;

sequelize.sync().then(function(){
  Quiz.count().then(function(count) {
    if (count === 0) { // La tabla se incializa cuando está vacía
      Quiz.create({
        pregunta: "Capital de Italia",
        respuesta: "Roma"
      });
      Quiz.create({
        pregunta: "Capital de España",
        respuesta: "Madrid"
      });
      Quiz.create({
        pregunta: "Capital de Portugal",
        respuesta: "Lisboa"
      }).then(function(){
        console.log("Base de datos inicializada");
      });
    }
  });
});
