<?php

/*
  get_levels.php

  Pequeña API: devuelve todos los registros de la tabla `level` (niveles)
  en formato JSON para rellenar el desplegable en el formulario de Matrícula.

    Ejecuta una consulta SELECT para obtener ID y nombre del nivel.
    Empaqueta las filas en un array y responde en JSON.
*/

require_once('config.php'); // Incluye obtenerConexion() y responder()

try {
    // conexión a la BBDD
    $conexion = obtenerConexion();

    // hace SELECT para obtener los niveles
    // Se selecciona el ID y la columna 'level' (asumiendo ese nombre) para el <select>.
    $sql = "SELECT id_level, name FROM level;";
    
    $resultado = $conexion->query($sql); 

    // recolecta las filas en un array asociativo
    $datos = [];
    while ($fila = $resultado->fetch_assoc()) {
        $datos[] = $fila; 
    }

    //responder con éxito
    responder($datos, true, "Niveles recuperados correctamente", $conexion);

} catch (mysqli_sql_exception $e) {
    // Captura Errores específicos de mysqli
    responder(null, false, "Error en la base de datos al obtener niveles: " . $e->getMessage(), $conexion ?? null);
} catch (Exception $e) {
    // Captura cualquier otra excepción / error inesperado
    responder(null, false, "Error general al obtener niveles: " . $e->getMessage(), $conexion ?? null);
}