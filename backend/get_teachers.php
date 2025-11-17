<?php

/*
  get_teachers.php
  Pequeña API: devuelve todos los registros de la tabla `teacher` (profesores)
  en formato JSON para rellenar el desplegable en el formulario de Matrícula.
*/

require_once('config.php'); // Incluye obtenerConexion() y responder()

try {
    // conexión a la BBDD
    $conexion = obtenerConexion();

    // Consulta SELECT para obtener los profesores
    // Se selecciona el ID y el nombre para usarlos en el <select>
    $sql = "SELECT id_teacher, CONCAT(name,' ', surname) as full_name FROM teacher;";
    
    // Usamos el método query para que lance excepciones en caso de error SQL
    $resultado = $conexion->query($sql); 

    // recolecta las filas en un array asociativo
    $datos = [];
    while ($fila = $resultado->fetch_assoc()) {
        $datos[] = $fila; 
    }

    // responder con éxito
    responder($datos, true, "Profesores recuperados correctamente", $conexion);

} catch (mysqli_sql_exception $e) {
    // Captura Errores específicos de mysqli (p. ej. problemas con la consulta)
    responder(null, false, "Error en la base de datos al obtener profesores: " . $e->getMessage(), $conexion ?? null);
} catch (Exception $e) {
    // Captura cualquier otra excepción / error inesperado
    responder(null, false, "Error general al obtener profesores: " . $e->getMessage(), $conexion ?? null);
}

// va sin cierre de php para evitar los errores de headers...