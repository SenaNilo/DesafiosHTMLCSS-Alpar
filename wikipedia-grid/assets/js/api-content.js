//Conexão com api
const apiKey = "live_Yobnvn1yFpqMnj5wc7KY0CNWgXhmcgpI0cUglfdEUO8egBURTpDOD7kHkgZYkaZc";

async function criarPosts(qtdPosts){
    try{
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=${qtdPosts}&api_key=${apiKey}`)

        const json = await response.json()

        for(let i = 0; i < json.length; i++){
            let title = "Cat: "
            const mainPosts = document.querySelector("main div.posts")
            const articleEl = document.createElement('article')
            const h2El = document.createElement('h2')
            const paragraphEl = document.createElement('p')
            const originEl = document.createElement('p')
            const brEl = document.createElement('br')
            const imgEl = document.createElement('img')

            title += json[i].breeds[0].name; //PERGUNTAR AMANHA COMO QUE FAZ PARA IR ADICIONANDO CONFORME O ENVIO DE API, pois ele nao aguarda o retorno da response da api
            h2El.innerHTML = title
            paragraphEl.innerHTML = json[i].breeds[0].description
            originEl.innerHTML = "Origin: " + json[i].breeds[0].origin + "<br>Weigth: " + json[i].breeds[0].weight.metric + "kg"
            
            imgEl.src = json[i].url
            imgEl.style.maxHeight = "500rem";
            imgEl.style.maxWidth = "100%";
            imgEl.style.borderRadius = "10rem";
        

            articleEl.appendChild(h2El)
            articleEl.appendChild(paragraphEl)
            articleEl.appendChild(originEl)
            articleEl.appendChild(imgEl)


            mainPosts.appendChild(articleEl)
            mainPosts.appendChild(brEl)

                // title = "Curiosidade #"
        }

    }catch(err){
        console.log(err)
    }        
}

criarPosts(5)