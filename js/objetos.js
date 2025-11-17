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

class Student {
	#id_student;
	#dni;
	#name;
	#surname;
	#bdate;
	#email;
	#tel;
	#id_access;
	#is_active; //boolean

	constructor(id_student, dni, name, surname, bdate, email, tel, id_access, is_active) {
		this.#id_student = id_student;
		this.#dni = dni;
		this.#name = name;
		this.#surname = surname;
		this.#bdate = bdate;
		this.#email = email;
		this.#tel = tel;
		this.#id_access = id_access;
		this.#is_active = is_active;
	}

	// Getters (solo los necesarios para el alta)
	get id_student() {
		return this.#id_student;
	}
	get dni() {
		return this.#dni;
	}
	get name() {
		return this.#name;
	}
	get surname() {
		return this.#surname;
	}
	get bdate() {
		return this.#bdate;
	}
	get email() {
		return this.#email;
	}
	get tel() {
		return this.#tel;
	}
	get id_access() {
		return this.#id_access;
	}
	get is_active() {
		return this.#is_active;
	}
	//setters
	set id_student(id_student) {
		this.#id_student = id_student;
	}

	set dni(dni) {
		this.#dni = dni;
	}

	set name(name) {
		this.#name = name;
	}
	set surname(surname) {
		this.#surname = surname;
	}
	set bdate(bdate) {
		this.#bdate = bdate;
	}
	set email(email) {
		this.#email = email;
	}
	set tel(tel) {
		this.#tel = tel;
	}
	set id_access(id_access) {
		this.#id_access = id_access;
	}
	set is_active(is_active) {
		this.#is_active = is_active;
	}
	toJSON() {
		let oStudent = {
			id_student: this.#id_student,
			dni: this.#dni,
			name: this.#name,
			surname: this.#surname,
			bdate: this.#bdate,
			email: this.#email,
			tel: this.#tel,
			id_access: this.#id_access,
			is_active: this.#is_active,
		};
		return oStudent;
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

	async getAccessLevels() {
		let datos = new FormData();
		let respuesta = await peticionGET("get_access.php", datos);
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
	/**
	 * @param {Student} oStudent -Objeto student validado
	 * 
	 */
	async altaStudent(oStudent){
		let datos = new FormData();
		datos.append("student",JSON.stringify(oStudent.toObject()));

		let respuesta = await peticionPOST("alta_student.php, datos");
		return respuesta;
	}


}
