var express =  require('express');


var app = express();


app.get("/Pagina1", function(req,res){
	res.send('<thml><title>Ejercicio P2P</title><body> ' 
	        + '<h1>Ejercicio P2P Obligatorio --Modulo #4-- </h1> '
			+ '<form method="get" action="/Pagina2"> '
			+ '1. ¿Quién descubrió América?: <br> '
			+ '<input type="hidden" name="idPregunta" value="1" />'
			+ '<input type="text" name="descubridor" /><br> '
			+ '<input type="submit" value="Enviar Respuesta 1"/> '
			+ '</form> '
			+ '<form method="get" action="/Pagina2">'
			+ '2. ¿Cuál es la Capital de Portugal?: <br> '
			+ '<input type="hidden" name="idPregunta" value="2" />'
			+ '<input type="text" name="capital" /><br> '
			+ '<input type="submit" value="Enviar Respuesta 2"/> '
			+ '</form>'
			+ '</body></html> '
			 );
}
);

app.get('/Pagina2', function(req, res){
	if (req.query.idPregunta === "1"){
		if (req.query.descubridor === "Cristobal Colón") {
			res.send('<thml><title>Ejercio P2P</title><body> ' 
				   + '<h1>Ejercicio P2P Obligatorio --Modulo #4-- </h1> '
				   + 'Has contestado la pregunta: ' + req.query.idPregunta  + '. ¿Quién descubrió América? <br>'
                   + 'La Respuesta correcta es: Cristobal Colón <br>' 
				   + 'Tu respuesta fue: ' + req.query.descubridor
				   + '<br> Felicidades Respuesta Correcta <br><br>'
				   + '<a href="../Pagina1">Volver a la Página Inicial</a>');
		}
		else {
			res.send('<thml><title>Ejercio P2P</title><body> ' 
				   + '<h1>Ejercicio P2P Obligatorio --Modulo #4-- </h1> '
				   + 'Has contestado la pregunta: ' + req.query.idPregunta  + '. ¿Quién descubrió América? <br>'
                   + 'La Respuesta correcta es: Cristobal Colón <br>' 
				   + 'Tu respuesta fue: ' + req.query.descubridor
				   + '<br> Lo siento tu Respuesta es incorrecta <br><br>'
				   + '<a href="../Pagina1">Volver a la Página Inicial</a>');
		}
	}
	else {
		if (req.query.capital === "Lisboa") {
			res.send('<thml><title>Ejercio P2P</title><body> ' 
				   + '<h1>Ejercicio P2P Obligatorio --Modulo #4-- </h1> '
				   + 'Has contestado la pregunta: ' + req.query.idPregunta  + '. ¿Cuál es la Capital de Portugal? <br>'
                   + 'La Respuesta correcta es: Lisboa <br>' 
				   + 'Tu respuesta fue: ' + req.query.capital
				   + '<br> Felicidades Respuesta Correcta <br><br>'
				   + '<a href="../Pagina1">Volver a la Página Inicial</a>');
		}
		else {
			res.send('<thml><title>Ejercio P2P</title><body> ' 
				   + '<h1>Ejercicio P2P Obligatorio --Modulo #4-- </h1> '
				   + 'Has contestado la pregunta: ' + req.query.idPregunta  + '. ¿Cuál es la Capital de Portugal? <br>'
                   + 'La Respuesta correcta es: Lisboa <br>' 
				   + 'Tu respuesta fue: ' + req.query.capital
				   + '<br>Lo siento tu Respuesta es incorrecta <br><br>'
				   + '<a href="../Pagina1">Volver a la Página Inicial</a>');
		}
	}
	
	
});

app.listen(3000);