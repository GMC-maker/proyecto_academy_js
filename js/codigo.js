"use strict";

//Programa MAIN

var oModelo = new Modelo();

registrarEventos();

//Registro de eventos
function registrarEventos() {
	//Opciones del menú:
	document.querySelector("#mnuAltaEnrollment").addEventListener("click", mostrarFormulario);

	//Botones
	//como originalmente es un boton submit vamos a cambiar su comportamiento:
	frmAltaEnrollment.addEventListener("submit", (e) => {
		e.preventDefault(); //esto cambia el comportamiento de submit.
		procesarAltaEnrollment();
	});
}

function mostrarFormulario(oEvento) {
	let opcionMenu = oEvento.target.id; // Opción de menú pulsada (su id)

	document.querySelector("#mensajeSistema").innerHTML = "";

	//ocultarFormularios();

	switch (opcionMenu) {
		case "mnuAltaEnrollment":
			frmAltaEnrollment.classList.remove("d-none");
			//actualizarDesplegablesTipos(undefined); /*OJO*/
			actualizarDesplegableStudent();
			actualizarDesplegableTeacher();
			actualizarDesplegableLanguage();
			actualizarDesplegableLevel();
			break;
	}
}

function ocultarFormularios() {
	frmAltaEnrollment.classList.add("d-none");

	//borrado del contenido de capas con resultados
	document.querySelector("#resultadoBusqueda").innerHTML = "";
	document.querySelector("#listados").innerHTML = "";
}

/**
 * @param {string} mensaje El texto que vemos en la pantalla
 * @param {boolean} esExito si el mensaje es true o false si es error.
 */

function mostrarMensajeSistema(mensaje, esExito) {
	const mensajeDiv = document.querySelector("#mensajeSistema");
	//para borrar los mensajes anteriores:
	mensajeDiv.innerHTML = "";

	//clase de Bootstrap (success o danger)
	const alertClass = esExito ? "alert-success" : "alert-danger";

	const html = `
			<div class="alert ${alertClass} alert-dismissible fade show mt-4" role="alert">
			${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;

	//Insetar el mensaje en HTML
	mensajeDiv.innerHTML = html;

	// Opcional: Ocultar el mensaje de éxito automáticamente después de 5 segundos
	if (esExito) {
		setTimeout(() => {
			const alertElement = mensajeDiv.querySelector(".alert");
			if (alertElement) {
				// Usamos el constructor de Alert de Bootstrap para cerrar correctamente
				new bootstrap.Alert(alertElement).close();
			}
		}, 5000);
	}
}

async function actualizarDesplegableStudent(idStudentSeleccionado) {
	let respuesta = await oModelo.getStudents(); //de donde viene getTipos...
	let options = "<option value=''>Seleccione un estudiante...</option>";

	if (respuesta.ok) {
		for (let student of respuesta.datos) {
			if (idStudentSeleccionado && idStudentSeleccionado == student.id_student) {
				// Si llega el parámetro ( != undefined )
				options += "<option selected value='" + student.id_student + "' >" + student.full_name + "</option>";
			} else {
				options += "<option value='" + student.id_student + "' >" + student.full_name + "</option>";
			}
		}
		//esto es para asignar las options al select con id = id_student
		frmAltaEnrollment.id_student.innerHTML = options;
	} else {
		console.error("Error al cargar estudiantes: ", respuesta.mensaje);
	}
}
async function actualizarDesplegableTeacher(idTeacherSeleccionado) {
	let respuesta = await oModelo.getTeachers();
	let options = "<option value=''>Seleccione un profesor...</option>";

	if (respuesta.ok) {
		//aqui hace un CONCAT en la consulta dentro del php.
		for (let teacher of respuesta.datos) {
			if (idTeacherSeleccionado && idTeacherSeleccionado == teacher.id_teacher) {
				options += "<option selected value='" + teacher.id_teacher + "' >" + teacher.full_name + "</option>";
			} else {
				options += "<option value='" + teacher.id_teacher + "' >" + teacher.full_name + "</option>";
			}
		}
		frmAltaEnrollment.id_teacher.innerHTML = options;
	} else {
		console.error("Error al cargar profesores:", respuesta.mensaje);
	}
}

async function actualizarDesplegableLanguage(idLanguageSeleccionado) {
	let respuesta = await oModelo.getLanguages();
	let options = "<option value=''>Seleccione un idioma...</option>";

	if (respuesta.ok) {
		// los campos son id_language y name
		for (let language of respuesta.datos) {
			if (idLanguageSeleccionado && idLanguageSeleccionado == language.id_language) {
				options += "<option selected value='" + language.id_language + "' >" + language.name + "</option>";
			} else {
				options += "<option value='" + language.id_language + "' >" + language.name + "</option>";
			}
		}
		frmAltaEnrollment.id_language.innerHTML = options;
	} else {
		console.error("Error al cargar idiomas:", respuesta.mensaje);
	}
}

async function actualizarDesplegableLevel(idLevelSeleccionado) {
	let respuesta = await oModelo.getLevels();
	let options = "<option value=''>Seleccione un nivel...</option>";

	if (respuesta.ok) {
		// los campos son id_level y name
		for (let level of respuesta.datos) {
			if (idLevelSeleccionado && idLevelSeleccionado == level.id_level) {
				options += "<option selected value='" + level.id_level + "' >" + level.name + "</option>";
			} else {
				options += "<option value='" + level.id_level + "' >" + level.name + "</option>";
			}
		}
		frmAltaEnrollment.id_level.innerHTML = options;
	} else {
		console.error("Error al cargar niveles:", respuesta.mensaje);
	}
}

async function procesarAltaEnrollment() {
	// Recoger datos del formulario
	let id_student = frmAltaEnrollment.id_student.value; // el campo select se llama id_student
	let id_teacher = frmAltaEnrollment.id_teacher.value;
	let id_language = frmAltaEnrollment.id_language.value;
	let id_level = frmAltaEnrollment.id_level.value;
	let init_date = frmAltaEnrollment.init_date.value.trim();
	let hours = parseInt(frmAltaEnrollment.hours.value); // tipo date pero tratado como txt?
	// Para el checkbox, .checked devuelve true/false
	let payment = frmAltaEnrollment.payment.checked;

	// validar datos del formulario
	if (validarAltaEnrollment()) {
		let respuesta = await oModelo.altaEnrollment(
			new Enrollment(null, id_student, id_teacher, id_language, id_level, init_date, hours, payment)
		);

		alert(respuesta.mensaje);

		if (respuesta.ok) {
			frmAltaEnrollment.reset();
			//ocultamos
			frmAltaEnrollment.classList.add("d-none");
		}
	}
}

function validarAltaEnrollment() {
	// Recuperar datos del formulario frmModificarEnrollment? aun no existe?

	let id_student = frmAltaEnrollment.id_student.value;
	let id_teacher = frmAltaEnrollment.id_teacher.value;
	let id_language = frmAltaEnrollment.id_language.value;
	let id_level = frmAltaEnrollment.id_level.value;
	let init_date = frmAltaEnrollment.init_date.value.trim();
	let hours = parseInt(frmAltaEnrollment.hours.value.trim());
	//let payment = parseInt(frmAltaEnrollment.payment.value.trim());

	let valido = true;
	let errores = "";

	// Validación de selects (valores vacíos son la opción por defecto)
	if (id_student === "" || id_teacher === "" || id_language === "" || id_level === "") {
		valido = false;
		errores += "Debe seleccionar una opcion del listado.\n";
	}

	// Validación de Horas (debe ser mayor a 1hr)
	if (isNaN(hours) || hours < 1) {
		valido = false;
		errores += "Las Horas totales del Curso deben ser 1hr minimo).\n";
	}

	// Validación de Fecha de Inicio (no vacía)
	if (init_date.length === 0) {
		valido = false;
		errores += "Debe introducir una fecha de inicio del curso.\n";
	}

	if (!valido) {
		alert(errores);
		mostrarMensajeSistema("Errores de Validación: <br>" + errores, false);
	}

	return valido;
}
