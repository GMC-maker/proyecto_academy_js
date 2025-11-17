<?php
//Pequeña API: devuelve todos los registros de la tabla `student` en formato JSON.
require_once('config.php');
// Incluye obtenerConexion() y responder()

try { 

    $conexion = obtenerConexion();

    // Selecciona id_student y el nombre para el desplegable
    $sql = "SELECT id_student,CONCAT(name,' ', surname) AS full_name FROM student;";
    $resultado = mysqli_query($conexion, $sql);

    //se recolecta en un array asociativo: 
    $datos = [];
    while ($fila = $resultado->fetch_assoc()) {
        $datos[] = $fila; 
    }

    //responde en el formato JSON: 
    responder($datos, true, "Estudiantes recuperados", $conexion);
} catch (mysqli_sql_exception $e) {
    // Errores específicos de mysqli (p. ej. problemas con la consulta o la conexión)
    // Enviamos un JSON de error. Usamos $conexion ?? null para evitar usar
    // una variable no definida si la conexión falló al crearse.
    responder(null, false, "Error en la base de datos: " . $e->getMessage(), $conexion ?? null);
} catch (Exception $e) {
    // Captura cualquier otra excepción / error inesperado
    responder(null, false, "Error general: " . $e->getMessage(), $conexion ?? null);
}


