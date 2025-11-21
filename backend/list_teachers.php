<?php
/*
  list_teachers.php

  API: Devuelve todos los profesores en formato JSON.
  Basado en el esquema de list_enrollment.php
*/

require_once("config.php");

$conexion = obtenerConexion();
$datos = [];

// Consulta SQL para obtener todos los campos relevantes de la tabla teacher
// Columnas basadas en teacher.sql: id_teacher, name, surname, email, tel, salary, registered_date, native, id_language
$sql = "SELECT 
            id_teacher, 
            name, 
            surname, 
            email, 
            tel, 
            salary, 
            registered_date, 
            native, 
            id_language
        FROM 
            teacher 
        ORDER BY 
            surname, name";

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
    responder($datos, true, "Listado de profesores obtenido", $conexion);
}

?>