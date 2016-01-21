function Respuesta(x) {
	if(typeof(x)==='string' || typeof(x)==='number'){
		return function(res){return res === x;};
	}
	else if(x instanceof RegExp === true){
		return function(res){return res.match(x);};
	}
	else {
		return x;
	}
}

module.exports = Respuesta;
