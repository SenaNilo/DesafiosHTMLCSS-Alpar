const quintal = document.querySelector("#quintal")
const sala = document.querySelector("#sala")
const banheiro = document.querySelector("#banheiro")
const quarto = document.querySelector("#quarto")

const notificacao = document.querySelector("#msg")

const btns = document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.dataset.comodo == "quarto"){

            let on = quarto.classList.toggle("bg-warning")
            if(on)
                notificacao.innerHTML = CentralDeLuzes.ligar("quarto")
            else
                notificacao.innerHTML = CentralDeLuzes.desligar("quarto")
            
        }else if(btn.dataset.comodo == "quintal"){

            let on = quintal.classList.toggle("bg-warning")
            if(on)
                notificacao.innerHTML = CentralDeLuzes.ligar("quintal")
            else
                notificacao.innerHTML = CentralDeLuzes.desligar("quintal")
            
            
        }else if(btn.dataset.comodo == "sala"){

            let on = sala.classList.toggle("bg-warning")
            if(on)
                notificacao.innerHTML = CentralDeLuzes.ligar("sala")
            else
                notificacao.innerHTML = CentralDeLuzes.desligar("sala")
            
        }else if(btn.dataset.comodo == "banheiro"){

            let on = banheiro.classList.toggle("bg-warning")
            if(on)
                notificacao.innerHTML = CentralDeLuzes.ligar("banheiro")
            else
                notificacao.innerHTML = CentralDeLuzes.desligar("banheiro")
            
        }
    })
})