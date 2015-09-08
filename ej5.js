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
  $.ajax( "ej5.php" )
    .done(function(hora) {
      $("#hora").html($("#hora").html() + hora);
    })
    .fail(function(xhr, textStatus) {
      alert( "Error: " + textStatus );
    })
    .always(function() {
      $("#hora").after("<br><h1>Fin</h1>");
    });
});
