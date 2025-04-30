app.controller("UsuarioController", function ($scope, UserService) {
    $scope.usuarios = [
        { nome: "Tobias Gabriel", email: "tobias.gabriel@email.com", tipo: "Aluno", dataCadastro: new Date('2025-04-20') },
        { nome: "Maria Souza", email: "maria.souza@email.com", tipo: "Professor", dataCadastro: new Date('2025-04-19') },
        { nome: "Carlos Eduardo", email: "carlos.eduardo@email.com", tipo: "Aluno", dataCadastro: new Date('2025-04-18') },
        { nome: "Sophia Ribeiro", email: "sophia.ribeiro@email.com", tipo: "Aluno", dataCadastro: new Date('2025-04-17') },
        { nome: "Pedro Henrique", email: "pedro.henrique@email.com", tipo: "Professor", dataCadastro: new Date('2025-04-16') },
        { nome: "Larissa Fernanda", email: "larissa.fernanda@email.com", tipo: "Aluno", dataCadastro: new Date('2025-04-15') },
        { nome: "Bruno Carvalho", email: "bruno.carvalho@email.com", tipo: "Professor", dataCadastro: new Date('2025-04-14') },
        { nome: "Fernanda Lima", email: "fernanda.lima@email.com", tipo: "Aluno", dataCadastro: new Date('2025-04-13') },
        { nome: "Lucas Gabriel", email: "lucas.gabriel@email.com", tipo: "Aluno", dataCadastro: new Date('2025-04-12') },
        { nome: "Beatriz Almeida", email: "beatriz.almeida@email.com", tipo: "Professor", dataCadastro: new Date('2025-04-11') }

    ];

    if(!localStorage.getItem("users"))
        UserService.inicializar($scope.usuarios)
    
});

app.controller("AppController", function ($scope, $filter, UserService) {
    $scope.modal = false
    $scope.errorForm = false
    $scope.successForm = false
    $scope.loading = false
    $scope.formDisabled = false
    $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";
    $scope.filtroTipoAluno = false
    $scope.filtroTipoProfessor = false
    $scope.filtro = ""
    $scope.users = UserService.listar()
    $scope.userInput = {
        id: 0,
        nome: "",
        email: "",
        tipo: "",
    }
    // $scope.select = true

    $scope.toggleModal = () => {
        $scope.modal = !$scope.modal
        $scope.successForm = false
    }
    $scope.toggleLoading = () => {
        $scope.loading = !$scope.loading
    }
    $scope.toggleFormDisabled = () => {
        $scope.formDisabled =  !$scope.formDisabled
    }

    $scope.filteredUsers = function () {
        let filtered = $filter("filter")(
            $filter("filter")(
                $filter("filter")(
                    $scope.users,
                    $scope.filtroTipoAluno ? { tipo: "Aluno" } : {}
                ),
                $scope.filtroTipoProfessor ? { tipo: "Professor" } : {}
            ),
            $scope.filtro ? { nome:  $scope.filtro } : {}
        )

        return filtered
    }

    $scope.adicionarUser = async function () {
        $scope.errorForm = false
        $scope.toggleFormDisabled()

        try{
            $scope.userInput.id = Math.random().toString(36).substring(2, 9)

            $scope.toggleLoading()
            await UserService.salvar($scope.userInput)
            
            // Força Angular a atualizar a UI depois de async/await
            $scope.$applyAsync(() => {
                $scope.users = UserService.listar()
                $scope.toggleLoading()
                $scope.toggleFormDisabled()
                $scope.successForm = true
                $scope.userInput = {
                    id: 0,
                    nome: "",
                    email: "",
                    tipo: "",
                }
            })
        }catch(error){
            console.error("Erro ao salvar usuário:", error)
            $scope.toggleLoading()
        }
        
    }

    $scope.removerUser = function (userId) {
        UserService.remover(userId)


        $scope.users = UserService.listar()
    }

    $scope.validate = (error, touched) =>{
        
        if(!$scope.successForm){
            if(!touched)
                return {}
            const values = Object.values(error)
            if(values.length === 0){
                $scope.errorForm = false
                $scope.successForm = false
                return {}
            }
            const isTrue = values.reduce((acc, curr) => acc && curr, true)
            if(isTrue){
                // if(successForm)
                //     return {}
                $scope.errorForm = true
                return { "border-color": "red" }
            }
        }
            
    }
    
})