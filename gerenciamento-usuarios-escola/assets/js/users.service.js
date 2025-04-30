window.app.factory("UserService", function() {
    let users = JSON.parse(localStorage.getItem("users") || "[]")

    return {
        listar(){
            // Feito para impedir o hashCode
            return angular.copy(users)
            
        },
        inicializar(usersInit){
            for(let i = 0; i < usersInit.length; i++){

                users.push({
                    id: Math.random().toString(36).substring(2, 9),
                    nome: usersInit[i].nome,
                    email: usersInit[i].email,
                    tipo: usersInit[i].tipo,
                    dataCadastro: usersInit[i].dataCadastro,
                })
            }
        },
        adicionar(user){
            // id, nome, tipo
            users.push({
                id: user.id,
                nome: user.nome,
                email: user.email,
                tipo: user.tipo,
                dataCadastro: new Date()
            })

            localStorage.setItem("users", JSON.stringify(users))

            // msg de sucesso
        },
        remover(userId){
            users = users.filter((user) => user.id != userId)

            localStorage.setItem("users", JSON.stringify(users))
        },
        async salvar(user){
            // promise aq de timeout
            const start = Date.now()
            await this.server(2000)

            const end = Date.now()

            console.log("Terminou: ", (end - start) / 1000 + "")

            this.adicionar(user)

            return {}
        },
        server(ms){
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(ms), ms)
            })
        }
    }
})