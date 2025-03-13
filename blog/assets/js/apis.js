//Tipos de Apis - Rest & Soap

//Tendo termo Rest Full por usar todos os métodos de HTTP, utilizando JSON - JavaScript Object Notation
//Soap é um protocolo que usa XML, e por ter um protocolo próprio, ele se torna bastante seguro 

//Exemplo, utilizando AJAX (Versão antiga, por isso do nome se ter XML pois na antiga web era tudo feito assim)
var xhr = new XMLHttpRequest()
var url = 'sua_url_aqui'
xhr.open('GET', url, true) //true é para identificar se ele vai ser assincrono ou nao
xhr.onreadystatechange = () => {
    //Chamada 200 significa que esta tudo certo e o ready state 4 significa que a chamada terminou
    if (xhr.readyState == 4 && xhr.status == 200){
        var data = JSON.parse(xhr.status == 200)
        console.log(data);
    }
}
xhr.send()

//Novo método utilizando Fetch
var url = 'sua_url_aqui'
fetch(url).then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('Erro: ', error)
})

//Exemplo de como uma promise funciona
//Nao entendi se isso faz parte da linha de cima: Perguntar dps
const promise = new Promise(() => {
    resolve("Olá")
})
promise.then((resposta) => console.log(resposta))

//Try Catch
try {
    //Tente fazer este bloco de comandos, tendo conexão na maioria das vezes, se nao conseguir lance um erro
    var num = ""

    if(isNaN(num))
        throw new Error("Tem que ser numero")
    alert("Tudo de boa")
} catch (error) {
    alert(error.message) //Tem que ser numero
}