<?php
//include sigue ejecutandose, crea un advertencia...
include_once("funcionesBD.php");

$conexion = obtenerConexion();


//--------aqui la consulta sql para id_student
$sql_student = "SELECT id_student, name, surname FROM student ORDER BY surname;";
$resultado_student = mysqli_query($conexion, $sql_student);
$options_student = ""; //aqui se guarda el HTML de los <option>

//recorro la fila de la tabla student:
if($resultado_student){
    while ($fila = mysqli_fetch_assoc($resultado_student)) {
    //concateno el nombre y el apellido...
    $nombre_completo = $fila["name"] . " " . $fila["surname"];
    //ahora se construye la etiqueta <option> y VALUE es el id_student, texto es el nombre completo.
    $options_student .= " <option value='" . $fila["id_student"] . "'>" . htmlspecialchars($nombre_completo) . "</option>";
    }
}

//-------aqui la consulta sql para id_teacher:  
$sql_teacher = "SELECT id_teacher, name, surname FROM teacher ORDER BY surname;";
$resultado_teacher = mysqli_query($conexion, $sql_teacher);
$options_teacher = ""; //aqui se guarda el HTML de los <option>

//recorro la fila de la tabla teacher:
while ($fila = mysqli_fetch_assoc($resultado_teacher)) {
//concateno el nombre y el apellido...
$nombre_completo = $fila["name"] . " " . $fila["surname"];
//ahora se construye la etiqueta <option> y VALUE es el id_teacher, texto es el nombre completo.
$options_teacher .= " <option value='" . $fila["id_teacher"] . "'>" . htmlspecialchars($nombre_completo) . "</option>";
}


//----------aqui la consulta sql para id_language:  
$sql_language = "SELECT id_language, name FROM language ORDER BY name;";
$resultado_language = mysqli_query($conexion, $sql_language);
$options_language = ""; //aqui se guarda el HTML de los <option>

//recorro la fila de la tabla language:
while ($fila = mysqli_fetch_assoc($resultado_language)) {
$nombre_language = $fila["name"]; // aqui asi para que solo se vea el name no concateno
//ahora se construye la etiqueta <option> y VALUE es el id_language, texto es el nombre del idioma.
$options_language .= " <option value='" . $fila["id_language"] . "'>" . htmlspecialchars($nombre_language) . "</option>";
}


//---------para conectar con la tabla de los niveles del idioma:
$sql_level = "SELECT id_level, name FROM level ORDER BY id_level;";
$resultado_level = mysqli_query($conexion, $sql_level);
$options_level = ""; //aqui se guarda el HTML de los <option>

//recorro la fila de la tabla:
while ($fila = mysqli_fetch_assoc($resultado_level)) {
$nombre_level = $fila["name"]; //aqui igual no concateno para q solo se vean los name de level.
// se usa id_level para value y name para el nivel A2...C2
$options_level .= " <option value='" . $fila["id_level"] . "'>" . htmlspecialchars($nombre_level) . "</option>";
}

//hay que cerrar la conexion?
mysqli_close($conexion);


// Cabecera HTML que incluye navbar

include_once("header.html");
?>


<div class="container" id="formularios">
    <h2 class="mt-4">Alta de Nueva Matrícula</h2>
    <div class="row justify-content-center">
        <form class="col-12 col-lg-8" action="proceso_alta_enrollment.php" name="frmAltaMatricula" id="frmAltaMatricula" method="post">
            <fieldset>
                <legend>Datos de la Matrícula</legend>

                <div class="mb-3">
                    <label for="id_student" class="form-label">Estudiante</label>
                    <select class="form-select" name="id_student" id="id_student" required>
                        <option value="" selected disabled>-- Selecciona un Estudiante --</option>
                        <?php echo $options_student; ?>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="id_teacher" class="form-label">Profesor</label>
                    <select class="form-select" name="id_teacher" id="id_teacher" required>
                        <option value="" selected disabled>-- Selecciona un Profesor --</option>
                        <?php echo $options_teacher; ?>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="id_language" class="form-label">Idioma</label>
                    <select class="form-select" name="id_language" id="id_language" required>
                        <option value="" selected disabled>-- Selecciona un Idioma --</option>
                        <?php echo $options_language; ?>
                    </select>
                </div>
                
                <div class="mb-3">
                    <label for="id_level" class="form-label">Nivel del Curso (A2, B1, etc.)</label>
                    <select class="form-select" name="id_level" id="id_level" required>
                        <option value="" selected disabled>-- Selecciona un Nivel --</option>
                        <?php echo $options_level; ?>
                    </select>
                </div>
                
                <div class="mb-3">
                    <label for="init_date" class="form-label">Fecha de Inicio del Curso</label>
                    <input type="date" class="form-control" name="init_date" id="init_date" required>
                </div>

                <div class="mb-3">
                    <label for="hours" class="form-label">Horas Totales del Curso</label>
                    <input type="number" class="form-control" name="hours" id="hours" min="1" required>
                </div>
                
                <div class="mb-3 form-check mt-4">
                    <input type="checkbox" class="form-check-input" name="payment" id="payment" value="1">
                    <label class="form-check-label" for="payment">¿Pago de Matrícula Realizado? (Marcar si)</label>
                </div>
                <!--boton submit para el alta en la clase-->
                <div class="mb-5 text-center">
                    <button type="submit" id="btnAceptarAltaMatricula" name="btnAceptarAltaMatricula" class="btn btn-primary mt-4 me-2">Registrar Matrícula</button>

                    <button type="reset" class="btn btn-danger mt-4">Limpiar Formulario</button>
                </div>

            </fieldset>
        </form>
    </div>
</div>


<?php
include_once("footer.html")
?>