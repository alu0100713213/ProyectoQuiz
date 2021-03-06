var path = require('path');

// postgress: postgres://databaseuser:password@host:port/database
// sqlite3:   sqlite://:@:/
var databaseURL = process.env.DATABASE_URL          || 'sqlite://:@:/quiz';
var databaseStorage  = process.env.DATABASE_STORAGE || 'quiz.sqlite';
//                           1        2    3    4    5     6
var url = databaseURL.match(/(.*):\/\/(.*):(.*)@(.*):(.*)\/(.*)/);
var DB_name  = (url[6] || null); console.log("DB_name: "+DB_name);
var user     = (url[2] || null); console.log("database user: "+user);
var pwd      = (url[3] || null); console.log("password: "+pwd);

var protocol = (url[1] || null); console.log("protocol: "+protocol);
var dialect  = protocol;         console.log("dialect: "+dialect);
var port     = (url[5] || null); console.log("port: "+port);
var host     = (url[4] || null); console.log("host: "+host);
var storage  = databaseStorage;  console.log("database storage: "+storage);

// Cargar modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQlite
/*
var sequelize = new Sequelize(DB_name, user, pwd, 
        { 
          dialect: dialect, 
          protocol: protocol, 
          port: port,
          host: host,
          storage: storage,
          omitNull: true
        }
    );
*/

var sequelize = new Sequelize('sqlite://@:/', { storage: storage });

// Importar la definición de la tabla Quiz en quiz.js
var quiz_path = path.join(__dirname, 'quiz');
var Quiz = sequelize.import(quiz_path);

// Importar la definición de la tabla comments en quiz.js
var comment_path = path.join(__dirname, 'comments');
var Comment = sequelize.import(comment_path);

Comment.belongsTo(Quiz);
Quiz.hasMany(Comment);

// Exportar definición de la tabla Quiz
exports.Quiz = Quiz;
exports.Comment = Comment;

// sequelize.sync() crea e inicializa la tabla de preguntas en la DB
sequelize.sync().then(function(){
  // then(...) ejecuta el manejador una vez creada la tabla
  Quiz.count().then(function(count) {
    if (count === 0) { // La tabla sólo se incializa si está vacía
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