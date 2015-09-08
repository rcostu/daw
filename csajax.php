<?php

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

//Return an http error if exist
if (isset($_GET['error']) && $_GET['error'] != ''){
    header("HTTP/1.0 ".$_GET['error']);
    exit;
}

//Return an example array to the cross domain request
$arr = array("element1","element2",array("element31","element32"));
$arr['name'] = "response";
//Note that the response create a javascript function call statement with the value of the callback $GET parameter
echo $_GET['callback']."(".json_encode($arr).");";
