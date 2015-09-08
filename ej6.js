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
    $( "#ciudad" ).autocomplete({
      source: function( peticion, respuesta ) {
        $.ajax({
          url: "http://gd.geobytes.com/AutoCompleteCity",
          dataType: "jsonp",
          data: {
            q: peticion.term
          },
          success: function( datos ) {
            respuesta( datos );
          }
        });
      },
      minLength: 3,
    });    
});
