

function foreach(array, callbackFn){
    for(let i = 0; i < array.length; i++){
        callbackFn(array[i], i, array) // Coisas que o foreach "retorna"
    }
}

const ls = [1, 2, 3, 4];

foreach(ls, (e, idx, arrayCompleto,) => {
    console.log(e + " " + idx + " [" + arrayCompleto + "]")
})

//Procurar um item retornando o mesmo, usando callback
const item = ls.find((e) => e === 2);

console.log(item)

//Procurar um item retornando o index, usando callback
const idxItem = ls.findIndex((e) => e === 2);

console.log(idxItem)

//Filtrageum de item(s) retornando um array novo, usando callback
const tirarItemLista = ls.filter((e) => e != 2);

console.log(tirarItemLista) // Gerou uma cópia de ls, retirando o valor 2 do array [1,2,3,4] principal

//Retorna booleano para ver se existe tal item (ou condicao) dentro do array
const verSeTem = ls.includes(2);

console.log(verSeTem) 

//ele usa uma callbackfn para testar a sua condicao dentro da lista, organizando os itens dependendo de sua regra de negócio. Desafio: Fazer uma funcao sort para organizar
const organizar = ls.sort((a,b) => {
    return b - a
});
/*const organizarStrg = ls.sort((a,b) => {
    return a.localeCompare(b) //Retorna 1, 0 ou -1 - Ordenando sua Lista de Strings
}) */
console.log(organizar) 

//Reduce faz tudo, fazendo com que o 2 parametro passe para o antigo, como se fosse fibonacci - em suma - o reduce "Reduz" seu array para um valor só
const reduzir = ls.reduce((antigo, atual) => {
    return antigo + atual
})

console.log(reduzir)

//Setar um tempo, para executar algo depois da quantidade de milisegundos passados como parametro
setTimeout(() => {
    console.log("Olá")
}, 1000)

//Faz uma acao de tempos em tempos (definido por voce)
let i = 0
setInterval(() => {
    console.log("olá: " + i )
    i++
}, 1000)
