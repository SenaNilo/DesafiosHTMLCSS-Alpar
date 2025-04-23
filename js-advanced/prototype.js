// let obj = { name: "Nilo" }
// console.log(obj.toString())

// function Pessoa(name) {
//     this.name = name
// }

// Pessoa.prototype.falar = () => {
//     console.log(`Meu nome é ${this.name}`)
// }

// const pessoa1 = new Pessoa("DanDan")
// pessoa1.falar()

// let proto = {
//     falar() {
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }

// let pessoa = Object.create(proto);
// pessoa.nome = "Danilo"
// pessoa.falar()

const frase = "ola mundo"

String.prototype.toCapitalize = function () { //estou criando um metodo no prototupe
    const parts = this.split(" ")
    const newParts = parts.map((part) => {
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
    })

    return newParts.join(" ") //Join é o contrario de split
}

console.log(frase.toCapitalize()) //.toUpperCase() - deixa grandao