class Person {
    #email;
    #id;
    constructor(name, id, email) {
        this.name = name;
        this.#id = id;
        this.#email = email;
    }
    get id() {
        return this.#id;
    }
    get email() {
        return this.#email;
    }
    set id(id) {
        if (id > 0) {
            this.#id = id;
        }
    }
    set email(email) {
        if (email.includes("@")) {
            this.#email = email;
        }
    }
    describeRole() {
        console.log(`${this.name} is a school member.`);
    }
}

class Principal extends Person {
    constructor(name, id, email) {
        super(name, id, email);
        this.members = [];
    }
    addMember(member) {
        this.members.push(member);
    }
    removeMember(id) {
        this.members = this.members.filter(member => member.id !== id);
    }
    listMembers() {
        this.members.forEach(member => {
            console.log(`${member.name} - ${member.id}`);
        });
    }
    describeRole() {
        console.log(`${this.name} is the principal.`);
    }
}

class Teacher extends Person {
    constructor(name, id, email, subject) {
        super(name, id, email);
        this.subject = subject;
        this.grades = [];
    }
    gradeStudent(student, grade) {
        this.grades.push({
            student: student.name,
            grade: grade
        });
    }
    listGrades() {
        console.log(this.grades);
    }
    describeRole() {
        console.log(`${this.name} teaches ${this.subject}.`);
    }
}

class Student extends Person {
    constructor(name, id, email) {
        super(name, id, email);
        this.subjects = [];
    }
    enrollSubject(subject) {
        this.subjects.push(subject);
    }
    viewSubjects() {
        console.log(this.subjects);
    }
    describeRole() {
        console.log(`${this.name} is a student.`);
    }
}

const principal = new Principal("Rana", 11, "rana@gmail.com");
const teacher = new Teacher("Ahmed", 22, "ahmed@gmail.com", "Math");
const student = new Student("Sara", 33, "sara@gmail.com");
principal.addMember(teacher);
principal.addMember(student);
principal.listMembers();
teacher.gradeStudent(student, "A+");
teacher.listGrades();
student.enrollSubject("Maths");
student.enrollSubject("English");
student.viewSubjects();
const members = [principal, teacher, student];
members.forEach(member => member.describeRole());
