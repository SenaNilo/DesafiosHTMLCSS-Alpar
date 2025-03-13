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

async function visuContent(json, qtdPosts){
    /** Estrutura html
     * <article>
             <h2>Como passar e ser feliz na Alpar?</h2>
          
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus explicabo aut modi et aliquid dignissimos possimus corrupti? Asperiores corporis a eligendi facilis maiores veritatis quis molestiae sed, officia nobis.</p>
             <br>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A voluptatibus, possimus facilis porro, reprehenderit voluptate esse odio nobis, mollitia nesciunt recusandae. Unde porro placeat doloribus aspernatur laborum a expedita omnis.</p>
          </article>
          <br>
     */

    let title = "Curiosidade aleatória:"
    const mainPosts = document.querySelector("main div.posts")
    const articleEl = document.createElement('article')
    const h2El = document.createElement('h2')
    const paragraphEl = document.createElement('p')
    const brEl = document.createElement('br')

    for(let i = 0; i < qtdPosts; i++){
        // title += i; PERGUNTAR AMANHA COMO QUE FAZ PARA IR ADICIONANDO CONFORME O ENVIO DE API, pois ele nao aguarda o retorno da response da api
        h2El.innerHTML = title
        paragraphEl.innerHTML = json.fact

        articleEl.appendChild(h2El)
        articleEl.appendChild(paragraphEl)
        mainPosts.appendChild(articleEl)
        mainPosts.appendChild(brEl)

        // title = "Curiosidade #"
    }
    console.log(json)
}

criarPosts(10)