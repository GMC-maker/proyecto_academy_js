<?php

include_once("config.php");
$conexion = obtenerConexion();

// Recoger datos del JSON 
$student = json_decode($_POST['student']);

// 'is_active' es 'true' o 'false' (booleano)
// Convertimos explícitamente el valor a 1 o 0 (entero).
$tel_value = trim($student->tel);
$is_active_value = (int)$student->is_active;
$credit_value = (float)$student->credit;
$id_access_value = intval($student->id_access);

// Creamos la consulta SQL, ojo entrecomillas porque son string:
$sql = "INSERT INTO student VALUES(    
    null,
    '$student->dni',
    '$student->name',
    '$student->surname',
    '$tel_value',
    '$student->email',
    '$student->bdate',  
    $is_active_value,
    $id_access_value,
    $credit_value
);"; 

mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    // ...manejo de error
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    responder(null, false, "Se ha producido un error número $numerror en la inserción: $descrerror <br> Consulta SQL: " .$sql, $conexion);

} else {
    // Prototipo responder($datos,$ok,$mensaje,$conexion)
    responder(null, true, "Estudiante dado de alta exitosamente", $conexion);
}