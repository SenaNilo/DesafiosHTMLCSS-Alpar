class User {
    _name
    _email
    _password

    constructor(name,email,password){
        this.name = name
        this.email = email
        this.password = password
    }

    login(email,password, platform){
        return (
            this.email === email && 
            this.password === password
        )
    }

    get name(){
        return this._name
    }
    set name(name){
        this._name = name
    }
    get email(){
        return this._email
    }
    set email(email){
        this._email = email
    }
    get password(){
        return this._password
    }
    set password(password){
        this._password = password
    }
}

class Student extends User {
    constructor(name, email, password, RA){
        super(name, email, password)

        this.RA = RA
    }

    login(email, password, platform){
        return platform === "aluno" && super.login(email, password, platform)
    }
 
    get RA(){
        return this._RA
    }
    set RA(RA){
        this._RA = RA
    }

    get grade(){
        return this._grade
    }
    set grade(grade){
        this._grade = grade
    }
}

class Teacher extends User {
    login(email, password, platform){
        return (
            platform === "professor" &&
            this.email === email &&
            this.password === password
        )
    }

    gradeStudent(student, grade){
        if(grade >= 0 && grade <= 10) student.grade = grade
    }
}

const teacher = new Teacher('felipe', 'felipe@gmail', '123')
const student = new Student('joao', 'jooasd@gmail', '123', '1111')

teacher.gradeStudent(student, 8)

console.log(teacher)
console.log(student)