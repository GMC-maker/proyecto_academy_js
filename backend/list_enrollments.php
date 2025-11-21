<?php
//include sigue ejecutandose, crea un advertencia...
require_once("config.php");

$conexion = obtenerConexion();
$datos = [];
//generar el listado de todos los matriculados en la bd

$sql = "SELECT 
            e.id_enroll, 
            s.name AS student_name, 
            s.surname AS student_surname, 
            t.name AS teacher_name, 
            t.surname AS teacher_surname, 
            l.name AS language_name,
            lv.name AS level_name,
            e.init_date, 
            e.hours,
            e.payment
        FROM 
            enrollment e
        INNER JOIN 
            student s ON e.id_student = s.id_student
        INNER JOIN 
            teacher t ON e.id_teacher = t.id_teacher
        INNER JOIN
            language l ON e.id_language = l.id_language
        INNER JOIN
            level lv ON e.id_level = lv.id_level
        ORDER BY 
            e.init_date DESC";
$resultado = mysqli_query($conexion,$sql);

//vamos a verificar que no hay error de entrada:

if(mysqli_errno($conexion)!= 0){
    $numerror = mysqli_errno($conexion);
    $descrerror = mysqli_error($conexion);
    responder(null, false, "Error SQL $numerror: $descrerror",$conexion);
} else {
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $datos[] = $fila; //aqui agregamos la fila de datos
    }
// Responder con éxito (responder() se encarga de cerrar la conexión)
    responder($datos, true, "Listado de matrículas obtenido", $conexion);

}

?>