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

if ($_POST['nombre'] != "" && $_POST['universidad'] != "" ){
	echo "He recibido los datos: ".$_POST['nombre']." y ".$_POST['universidad'];
} else {
	echo "Error";
}
