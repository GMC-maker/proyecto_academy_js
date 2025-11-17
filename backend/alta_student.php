<?php

include_once("config.php");
$conexion = obtenerConexion();

// Recoger datos del JSON 
$student = json_decode($_POST['student']);

// 'is_active' es 'true' o 'false' (booleano)
// Convertimos explícitamente el valor a 1 o 0 (entero).
$is_active = (int)$student->is_active;

// Creamos la consulta SQL, ojo entrecomillas porque son string:
$sql = "INSERT INTO student VALUES(    
    null,
    '$student->dni',
    '$student->name',
    '$student->surname',
    '$student->bdate',  
    '$student->email', 
    '$student->tel',
    $student->id_access,
    $is_active_value
);"; 

mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    // ...manejo de error
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    responder(null, false, "Se ha producido un error número $numerror en la inserción: $descrerror <br>", $conexion);

} else {
    // Prototipo responder($datos,$ok,$mensaje,$conexion)
    responder(null, true, "Estudiante dado de alta exitosamente", $conexion);
}