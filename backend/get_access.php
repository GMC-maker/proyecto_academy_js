<?php
/*
  get_access_levels.php
  Devuelve todos los registros de la tabla `access` (niveles de acceso)
  en formato JSON para rellenar el desplegable.
  Igual que los de gabi de get_levels...
*/

require_once('config.php'); // Incluye obtenerConexion() y responder()

try { 
    $conexion = obtenerConexion();

    // Consulta SELECT para obtener los niveles de acceso
    $sql = "SELECT id_access, name FROM access;";
    
    $resultado = $conexion->query($sql); 

    // Recolecta las filas en un array asociativo
    $datos = [];
    while ($fila = $resultado->fetch_assoc()) {
        $datos[] = $fila; 
    }

    // Responder con éxito
    responder($datos, true, "Niveles de acceso recuperados correctamente", $conexion);

} catch (mysqli_sql_exception $e) {
    responder(null, false, "Error en la base de datos al obtener niveles de acceso: " . $e->getMessage(), $conexion ?? null);
} catch (Exception $e) {
    responder(null, false, "Error general al obtener niveles de acceso: " . $e->getMessage(), $conexion ?? null);
}