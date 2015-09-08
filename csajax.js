/*
Diseño de Aplicaciones Web
ETS Ingenieros Informáticos
Universidad Politécnica de Madrid

Autores:
Héctor Ambit Hernández <h.ambit@upm.es>
Roberto Costumero Moreno <roberto.costumero@upm.es>

Laboratorio de Minería de Datos y Simulación

Licencia: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
*/

$(document).ready(function(){
	
	//Send a cross domain ajax request
	function crossDomainWorks () {
		$.ajax({
		     url:"http://localhost:8888/csajax.php",
		     dataType: 'jsonp', //Type jsonp is mandatory in cross domain request
		     type: 'POST', //Note that it is ignored by the server
		     data: {
		     	error: '404'
		     },
		     crossDomain: true, //It is not necessary. It only transforma same domain request in a cross domain requesrt
		     success:function(json){
		         console.debug(json);
		         $("#response").text("Respuesta: " + JSON.stringify(json));
		         alert("Mirar la consola de desarrollador del navegador para mejor visualizaci\u00f3n de la respuesta.");
		     },
		     error:function(xhr){
		        $("#response").text("Error \""+xhr.status + "\" recibido desde el servidor.");
		     }      
		});
	}

	//Catch the click action over the button and execute the action specified
	$("#csajaxTest").on("click",crossDomainWorks);
});
