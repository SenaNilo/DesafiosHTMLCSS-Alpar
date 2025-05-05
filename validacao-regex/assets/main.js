const form = document.querySelector("form")

const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const cpf = document.querySelector("#cpf")


form.addEventListener('submit', event => {
    event.preventDefault()
    if(test()){
        setTimeout(() => {
            form.submit()
        }, 1000)
    }

    // form.classList.add('was-validated') para que o bootstrap nao faca a validacao, e sim eu
})

function test(){
    var nomeValue = nome.value
    var emailValue = email.value
    var cpfValue = cpf.value

    var validarNome = document.querySelector(".col-md:nth-child(1) div.form-floating .valid-feedback")
    var nomeInvalido = document.querySelector(".col-md:nth-child(1) div.form-floating .invalid-feedback")
    var validarEmail = document.querySelector(".col-md:nth-child(2) div.form-floating .valid-feedback")
    var emailInvalido = document.querySelector(".col-md:nth-child(2) div.form-floating .invalid-feedback")
    var validarCpf = document.querySelector(".col-md:nth-child(3) div.form-floating .valid-feedback")
    var cpfInvalido = document.querySelector(".col-md:nth-child(3) div.form-floating .invalid-feedback")


    var regexName = /^[A-Za-z]\w*(?: [A-Za-z]\w*)*$/; //aceita palavras e espacos, e a partir do barra w aceita outras palavras, mas nao aceitando numeros em todas as ocorrencias
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //validacao para email
    var regexCpf = /^(\d{3}\.\d{3}\.\d{3}-\d{2})$/; //validacao cpf

    if(regexName.test(nomeValue)){
        nomeInvalido.style.display = "none"
        nome.classList.remove("border-danger")

        validarNome.style.display = "flex"
        nome.classList.add("border-success")
    }else{
        validarNome.style.display = "none"
        nome.classList.remove("border-success")

        nomeInvalido.style.display = "flex"
        nome.classList.add("border-danger")
    }

    if(regexEmail.test(emailValue)){
        emailInvalido.style.display = "none"
        email.classList.remove("border-danger")

        validarEmail.style.display = "flex"
        email.classList.add("border-success")
    }else{
        validarEmail.style.display = "none"
        email.classList.remove("border-success")

        emailInvalido.style.display = "flex"
        email.classList.add("border-danger")
    }

    if(regexCpf.test(cpfValue)){
        cpfInvalido.style.display = "none"
        cpf.classList.remove("border-danger")

        validarCpf.style.display = "flex"
        cpf.classList.add("border-success")
    }else{
        validarCpf.style.display = "none"
        cpf.classList.remove("border-success")

        cpfInvalido.style.display = "flex"
        cpf.classList.add("border-danger")
    }

    return regexName.test(nomeValue) ? 
            (regexEmail.test(emailValue) ? 
                regexCpf.test(cpfValue) : false) 
        : false;

    // return true or false
}
