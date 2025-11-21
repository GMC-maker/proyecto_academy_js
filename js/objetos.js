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
	#tel;
	#email;
	#bdate;
	#is_active; //boolean
	#id_access;
	#credit;

	constructor(id_student, dni, name, surname, tel, email, bdate, is_active, id_access, credit) {
		this.#id_student = id_student;
		this.#dni = dni;
		this.#name = name;
		this.#surname = surname;
		this.#tel = tel;
		this.#email = email;
		this.#bdate = bdate;
		this.#is_active = is_active;
		this.#id_access = id_access;
		this.#credit = this.credit;
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
	get tel() {
		return this.#tel;
	}
	get email() {
		return this.#email;
	}
	get bdate() {
		return this.#bdate;
	}
	get is_active() {
		return this.#is_active;
	}
	get id_access() {
		return this.#id_access;
	}
	get credit() {
		return this.#credit;
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
	set tel(tel) {
		this.#tel = tel;
	}
	set email(email) {
		this.#email = email;
	}
	set bdate(bdate) {
		this.#bdate = bdate;
	}
	set is_active(is_active) {
		this.#is_active = is_active;
	}
	set id_access(id_access) {
		this.#id_access = id_access;
	}
	set credit(credit) {
		this.#credit = credit;
	}

	toJSON() {
		let oStudent = {
			id_student: this.#id_student,
			dni: this.#dni,
			name: this.#name,
			surname: this.#surname,
			tel: this.#tel,
			email: this.#email,
			bdate: this.#bdate,
			is_active: this.#is_active,
			id_access: this.#id_access,
			credit: this.#credit,
		};
		return oStudent;
	}
}

class Teacher {
	#id_teacher;
	#name;
	#surname;
	#email;
	#tel;
	#salary;
	#registered_date;
	#native;
	#id_language;

	constructor(id_teacher, name, surname, email, tel, salary, registered_date, native, id_language) {
		this.id_teacher = id_teacher;
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.tel = tel;
		this.salary = salary;
		this.registered_date = registered_date;
		this.native = native;
		this.id_language = id_language;
	}

	get id_teacher() {
		return this.#id_teacher;
	}

	get name() {
		return this.#name;
	}

	get surname() {
		return this.#surname;
	}

	get email() {
		return this.#email;
	}

	get tel() {
		return this.#tel;
	}

	get salary() {
		return this.#salary;
	}

	get registered_date() {
		return this.registered_date;
	}

	get native() {
		return this.#native;
	}

	get id_language() {
		return this.#id_language;
	}

	set id_teacher(id) {
		this.#id_teacher = id;
	}

	set name(nom) {
		this.#name = nom;
	}

	set surname(surname) {
		this.#surname = surname;
	}

	set email(mail) {
		this.#email = mail;
	}

	set tel(tel) {
		this.#tel = tel;
	}

	set salary(salario) {
		this.#salary = salario;
	}

	set registered_date(date) {
		this.#registered_date = date;
	}

	set native(native) {
		this.#native = native;
	}

	set id_language(id) {
		this.#id_language = id;
	}

	toJSON() {
		let oTeacher = {
			id_teacher: this.#id_teacher,
			name: this.#name,
			surname: this.#surname,
			email: this.#email,
			tel: this.#tel,
			salary: this.#salary,
			registered_date: this.#registered_date,
			native: this.#native,
			id_language: this.#id_language,
		};
		return oTeacher;
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

	//----------------------------- Para alta de matricula
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
	async listEnrollment() {
		let datos = new FormData();
		//ahora usaremos GET para llamar la info
		let respuesta = await peticionGET("list_enrollments.php", datos);
		return respuesta;
	}

	// --------------------Alta de estudiante
	// Aqui tenemos que añadir: alta student y alta teacher...
	/**
	 * @param {Student} oStudent -Objeto student validado
	 *
	 */
	async altaStudent(oStudent) {
		let datos = new FormData();
		datos.append("student", JSON.stringify(oStudent));

		let respuesta = await peticionPOST("alta_student.php", datos);
		return respuesta;
	}

	async listStudents() {
		let datos = new FormData();
		//ahora usaremos GET para llamar la info
		let respuesta = await peticionGET("list_students.php", datos);
		return respuesta;
	}

	// --------------------Alta de teacher
	// Aqui tenemos que añadir: alta student y alta teacher...
	/**
	 * @param {Teacher} oTeacher -Objeto student validado
	 *
	 */
	async altaTeacher(oTeacher) {
		let datos = new FormData();
		datos.append("teacher", JSON.stringify(oTeacher));

		let respuesta = await peticionPOST("alta_teacher.php", datos);
		return respuesta;
	}

	async listProfes() {
		let datos = new FormData();
		//ahora usaremos GET para llamar la info
		let respuesta = await peticionGET("list_teachers.php", datos);
		return respuesta;
	}
}
