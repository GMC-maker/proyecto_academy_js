"use strict";

class Enrollment {
	#id_enrollment;
	#id_student;
	#id_teacher;
	#id_language;
	#id_level;
	#init_date;
	#hours;
	#payment; //el booleano

	constructor(id_enrollment, id_student, id_teacher, id_language, id_level, init_date, hours, payment) {
		this.id_enrollment = id_enrollment;
		this.#id_student = id_student;
		this.#id_teacher = id_teacher;
		this.#id_language = id_language;
		this.#id_level = id_level;
		this.#init_date = init_date;
		this.#hours = hours;
		this.#payment = payment;
	}
	//Getters
	get id_enrollment() {
		return this.#id_enrollment;
	}
	get id_student() {
		return this.#id_student;
	}
	get id_teacher() {
		return this.#id_teacher;
	}
	get id_language() {
		return this.#id_language;
	}
	get id_level() {
		return this.#id_level;
	}
	get init_date() {
		return this.#init_date;
	}
	get hours() {
		return this.#hours;
	}
	get payment() {
		return this.#payment;
	}

	//setters
	set id_enrollment(id_enrollment) {
		this.#id_enrollment = id_enrollment;
	}

	set id_student(id_student) {
		this.#id_student = id_student;
	}
	set id_teacher(id_teacher) {
		this.#id_teacher = id_teacher;
	}
	set id_language(id_language) {
		this.#id_language = id_language;
	}
	set id_level(id_level) {
		this.#id_level = id_level;
	}
	set init_date(init_date) {
		this.#init_date = init_date;
	}
	set hours(hours) {
		this.#hours = hours;
	}
	set payment_value(payment) {
		this.#payment = payment;
	}

	toJSON() {
		let oEnrollment = {
			id_enrollment: this.#id_enrollment,
			id_student: this.#id_student,
			id_teacher: this.#id_teacher,
			id_language: this.#id_language,
			id_level: this.#id_level,
			init_date: this.#init_date,
			hours: this.#hours,
			payment: this.#payment,
		};
		return oEnrollment;
	}
}

class Modelo {
	//alta enrollment:

	// metodos para obtener(GET) los select:
	async getStudents() {
		let datos = new FormData();
		let respuesta = await peticionGET("get_students.php", datos);
		return respuesta;
	}
	async getTeachers() {
		let datos = new FormData();
		let respuesta = await peticionGET("get_teachers.php", datos);
		return respuesta;
	}

	async getLanguages() {
		let datos = new FormData();
		let respuesta = await peticionGET("get_languages.php", datos);
		return respuesta;
	}

	async getLevels() {
		let datos = new FormData();
		let respuesta = await peticionGET("get_levels.php", datos);
		return respuesta;
	}

	// MÉTODO POST PARA DAR DE ALTA UNA MATRÍCULA
	/**
	 * @param {Enrollment} oEnrollment - Objeto Enrollment ya validado
	 */
	async altaEnrollment(oEnrollment) {
		let datos = new FormData();
		// Convierte el objeto Enrollment (con propiedades privadas) a JSON
		// gracias al método toJSON que añadiremos.
		datos.append("enrollment", JSON.stringify(oEnrollment));

		// Llama al script PHP de alta (alta_enrollment.php)
		let respuesta = await peticionPOST("alta_enrollment.php", datos);
		return respuesta;
	}

	// Aqui tenemos que añadir: alta student y alta teacher...
}
