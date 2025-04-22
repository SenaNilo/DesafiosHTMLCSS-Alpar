class Pessoa {
    _name
    _age
    _email
    _password
    _birthday


    
    constructor(name, email, birthday, password){
        this.name = name
        this.email = email
        this.birthday = birthday
        this.password = password
    }

    get password(){
        return this._password
    }

    set password(password){
        this._password = password
    }

    get email(){
        return this._email
    }

    set email(email){
        this._email = email
    }

    get name(){
        return this._name
    }

    set name(name){
        if(!name.includes(" ")){
            throw new Error("Digite nome e sobrenome")
        }
        this._name = name
    }

    get birthday(){
        return new Date(this._birthday)
    }

    set birthday(birthday){
        this._birthday = birthday
        this._age = Math.floor((new Date().getTime() - new Date(birthday).getTime()) /
        1000 /
        60 /
        60 /
        24 /
        365)

        if(this._age < 18){
            throw new Error("Usuario com menos de 18 anos")
        }
    }

    get age(){
        return this._age
    }
}

const pessoa = new Pessoa(
    "Danilo Sena", 
    "nilo@alpar.com.br", 
    "2005-08-22", 
    "eenn", 
)
console.log(pessoa)