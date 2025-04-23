//Crie um array qualquer com alguns numeros e string
let strings = ["nilo", "Ola mundo", "SOU MAIS "]
let numbers = [12, 23, 4, 5, 8, 10, 9, 27]

Array.prototype.meuMap = function(cb){
    let aux = []
    for(let i = 0; i < this.length; i++){
       aux.push(cb(this[i]))
    }
    return aux
}
Array.prototype.meuFilter = function(cb){
    let aux = []
    for(let i = 0; i < this.length; i++){
        if(cb(this[i]))
            aux.push(this[i])
    }
    return aux 
}
Array.prototype.meuReduce = function(cb,init){
	for(let i=0; i < this.length; i++){
		init = cb(init,this[i]);
	}
	return init;
}

//Exemplo dado
const numeros = [1,2,3]

const dobrados = numeros.meuMap(n => n*2)
console.log(dobrados)

console.log(numbers.meuMap((a) => a + 1))
console.log(numbers.meuFilter((a) => a % 2 != 0))
console.log(numbers.meuReduce((a,b) => a + b, 0))

//Desafio Bônus
Array.prototype.meuForEach = function(cb){
    for(let i = 0; i < this.length; i++){
        cb(this[i], i, this)
    }
}

numbers.meuForEach((e, idx) => {
    console.log("Meu For each " + (idx+1) + " " + e)
})

Array.prototype.meuFind = function(cb){
    for(let i = 0; i < this.length; i++){
        if(cb(this[i]))
            return this[i]
    }
}

console.log(numbers.meuFind((e) => e < 10 && e % 2 == 0))