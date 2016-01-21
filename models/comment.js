module.exports = function(sequelize, dataTypes){
    return sequelize.define(
        'Comment',
        { texto: {
            type: dataTypes.STRING,
            validate: { notEmpty : {msg: "Falta el comentario"}}
        }
    });
};
