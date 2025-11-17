<?php

/*
  get_languages.php

  Pequeña API: devuelve todos los registros de la tabla `language` (idiomas)
  en formato JSON para rellenar el desplegable en el formulario de Matrícula.
  hace una consulta SELECT para obtener ID y nombre del idioma.

*/

require_once('config.php'); // Incluye obtenerConexion() y responder()

try {
    // conexión a la BBDD
    $conexion = obtenerConexion();

    // hace SELECT para obtener los idiomas
    // Se selecciona el ID y el nombre para usarlos en el <select> del frontend.
    $sql = "SELECT id_language, name FROM language;";
    
    $resultado = $conexion->query($sql); 

    // recolecta las filas en un array asociativo
    $datos = [];
    while ($fila = $resultado->fetch_assoc()) {
        $datos[] = $fila; 
    }

    // responder con éxito
    responder($datos, true, "Idiomas recuperados correctamente", $conexion);

} catch (mysqli_sql_exception $e) {
    // Captura Errores específicos de mysqli
    responder(null, false, "Error en la base de datos al obtener idiomas: " . $e->getMessage(), $conexion ?? null);
} catch (Exception $e) {
    // Captura cualquier otra excepción / error inesperado
    responder(null, false, "Error general al obtener idiomas: " . $e->getMessage(), $conexion ?? null);
}