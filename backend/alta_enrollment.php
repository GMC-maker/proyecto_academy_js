<?php
include_once("config.php");
$conexion = obtenerConexion();

// Recoger datos (ya llegan como un objeto PHP si la decodificación fue exitosa)
$enrollment = json_decode($_POST['enrollment']);

// OJO CAMPO BOOLEANO a ENTERO 
// Payment es 'true' o 'false' (booleano)
// Convertimos explícitamente el valor a 1 o 0 (entero).
$payment_value = (int)$enrollment->payment;

//creamos la sql consulta/ el insert..
$sql = "INSERT INTO enrollment VALUES(
    null, 
    $enrollment->id_student, 
    $enrollment->id_teacher,
    $enrollment->id_language,
    $enrollment->id_level,
    '$enrollment->init_date', 
    $enrollment->hours, 
    $payment_value
);"; 

mysqli_query($conexion, $sql);

if (mysqli_errno($conexion) != 0) {
    // ... manejo de error
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    responder(null, false, "Se ha producido un error número $numerror que corresponde a: $descrerror <br>", $conexion);

} else {
    // Prototipo responder($datos,$error,$mensaje,$conexion)
    responder(null, true, "Se ha dado de alta la matrícula", $conexion);
}
?>