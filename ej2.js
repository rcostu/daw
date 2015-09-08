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

var READY_STATE_UNINITIALIZED = 0; 
var READY_STATE_LOADING = 1; 
var READY_STATE_LOADED = 2;
var READY_STATE_INTERACTIVE = 3; 
var READY_STATE_COMPLETE = 4;

var pet_http;
var hora;

function dimeHora() {
  if(pet_http.readyState == READY_STATE_COMPLETE) {
    if(pet_http.status == 200) {
      hora = pet_http.responseText;
    }
  }
}

if(window.XMLHttpRequest) {
  pet_http = new XMLHttpRequest();
}
else if(window.ActiveXObject) {
  pet_http = new ActiveXObject("Microsoft.XMLHTTP");
}
 
if(pet_http) {
  pet_http.onreadystatechange = dimeHora;
  pet_http.open("GET", "ej2.php", false);
  pet_http.send(null);
}

function actualizaHora() {
  document.getElementById("hora").innerHTML = hora;
}

document.onload = actualizaHora;
