//Conexão com api
const myHeaders = new Headers();
myHeaders.append("x-apihub-key", "toQ2bxorZ3xuq48OJSaByxfo1N0TAMBC2mkMgp2brC8yfL-YD5");
myHeaders.append("x-apihub-host", "Cat-Fact-API.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "c0871b08-0bb3-4555-9be7-b5e435d68f91");

const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};


function criarPosts(qtdPosts){
    for(let i = 0; i < qtdPosts; i++){
        fetch("https://Cat-Fact-API.proxy-production.allthingsdev.co/fact", requestOptions)
           .then((response) => response.text())
           .then((result) => JSON.parse(result))
           .then((json) => visuContent(json, qtdPosts))
           .catch((error) => console.error(error));
    }
}

async function visuContent(json, title){
    console.log(json, title)

}