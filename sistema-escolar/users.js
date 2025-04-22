class Usuario {
    _nome
    _email
    _senha
    _tipo

    constructor(nome, email, senha){
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    set tipo(tipo){
        this._tipo = tipo
    }
    get tipo(){
        return this._tipo
    }
    
    set nome(nome){
        this._nome = nome
    }
    set email(email){
        this._email = email
    }
    set senha(senha){
        this._senha = senha
    }
    get nome(){
        return this._nome
    }
    get email(){
        return this._email
    }
    get senha(){
        return this._senha
    }

    exibirPerfil(){
        console.log(`Nome: ${this.nome} \nEmail: ${this.email}`)
    }
}

class Aluno extends Usuario {
    _turma

    constructor(nome, email, senha, turma){
        super(nome, email, senha)
        this.turma = turma
        this.tipo = "aluno"
    }

    set turma(turma){
        this._turma = turma
    }
    get turma(){
        return this._turma
    }

    getNome(){
        return this._nome
    }
    getTurma(){
        return this._turma
    }
    getEmail(){
        return this._email
    }
    getSenha(){
        return this._senha
    }

    exibirPerfil(){
        console.log(`Aluno: ${this.nome} \nEmail: ${this.email} \nTurma: ${this.turma}`)
    }
}

class Professor extends Usuario {
    _materias = []

    constructor(nome, email, senha, materias){
        super(nome, email, senha)
        this.materias = materias
        this.tipo = "professor"
    }

    set materias(materias){
        this._materias = materias
    }
    get materias(){
        return this._materias
    }

    getNome(){
        return this._nome
    }
    getMaterias(){
        return this._materias
    }
    getEmail(){
        return this._email
    }
    getSenha(){
        return this._senha
    }

    exibirPerfil(){
        console.log(`Professor: ${this.nome} \nEmail: ${this.email} \nMatérias: ${this.materias}`)
    }
}

humanas = ['Historia', 'Portugues', 'Geografia']
exatas = ['Matematica', 'Fisica', 'Quimica']
let nilo = new Professor('danilo', 'eilm@gmail', 'senha', exatas)
let cesar = new Aluno('Cesar', 'cece@gmail', '1234', 'SI')
let caco = new Professor('Caio', 'caco@gmail', '456789', humanas)
let oliver = new Aluno('Oliver', 'oli@gmail', 'oli123', 'CD')
nilo.exibirPerfil()
cesar.exibirPerfil()


let lista = [nilo, cesar, caco, oliver]
var listaUsers = new ListaUsers(lista)

// let jenni = new Aluno('jenni', 'ajeni@gmail', 'jj123', 'ADS')
// listaUsers.addUser(jenni)

// console.log(listaUsers.login('caco@gmail', '4563'))
// listaUsers.showUsers()
