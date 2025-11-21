<?php
/*
  list_students.php

  API: Devuelve todos los estudiantes en formato JSON.
  Basado en el esquema de list_enrollment.php
*/

require_once("config.php");

$conexion = obtenerConexion();
$datos = [];

// Consulta SQL para obtener todos los campos relevantes de la tabla student
// Asumimos que los campos son: id_student, dni, name, surname, tel, email, bdate, is_active, id_access, credit.
$sql = "SELECT 
            id_student, 
            dni, 
            name, 
            surname, 
            tel, 
            email, 
            bdate, 
            is_active, 
            id_access, 
            credit 
        FROM 
            student";

$resultado = mysqli_query($conexion, $sql);

// Verificar errores de ejecución de la consulta
if (mysqli_errno($conexion) != 0) {
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    responder(null, false, "Error SQL $numerror: $descrerror", $conexion);
} else {
    // Si no hay error, recolectar los datos
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $datos[] = $fila; // Agregar la fila de datos al array
    }
    
    // Responder con éxito (responder() se encarga de cerrar la conexión)
    responder($datos, true, "Listado de estudiantes obtenido", $conexion);
}

?>