window.app.factory("UserService", function() {
    let users = JSON.parse(localStorage.getItem("users") || "[]")

    return {
        listar(){
            return angular.copy(users)
            
        },
        inicializar(usersInit){
            console.log("eae")
            for(let i = 0; i < usersInit.length; i++){

                users.push({
                    id: Math.random().toString(36).substring(2, 9),
                    nome: usersInit[i].nome,
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
                tipo: user.tipo,
                dataCadastro: new Date()
            })

            localStorage.setItem("users", JSON.stringify(users))
        },
        remover(userId){
            users = users.filter((user) => user.id != userId)

            localStorage.setItem("users", JSON.stringify(users))
        }
    }
})