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
    $("#envio").on("click", function(event){
        $.ajax({
		  method: "POST",
		  url: "ej7.php",
		  data: { nombre: "Roberto", universidad: "UPM" }
		})
		  .done(function( msg ) {
		      alert( msg );
	    });
	});    
});
