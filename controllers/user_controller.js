var users = { admin: {id:1, username:"admin", password:"1234"},
		pepe: {id:2, username:"pepe", pasword:"5678"}
	};

exports.autenticar = function(login, password, callback){
	if(user[login]){
		if(password === users[login].password){
		callback(null, users[login]);
		}
		else{
		callback(new Error('Password erroneo'));}
	}
	else{
		callback(new Error('Usuario no existe'));}}
};
