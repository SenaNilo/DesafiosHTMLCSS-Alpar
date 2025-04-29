app.controller("UsuarioController", function ($scope, UserService) {
    $scope.usuarios = [
        { nome: "Tobias Gabriel", tipo: "Aluno", dataCadastro: new Date('2025-04-20') },
        { nome: "Maria Souza", tipo: "Professor", dataCadastro: new Date('2025-04-19') },
        { nome: "Carlos Eduardo", tipo: "Aluno", dataCadastro: new Date('2025-04-18') },
        { nome: "Sophia Ribeiro", tipo: "Aluno", dataCadastro: new Date('2025-04-17') },
        { nome: "Pedro Henrique", tipo: "Professor", dataCadastro: new Date('2025-04-16') },
        { nome: "Larissa Fernanda", tipo: "Aluno", dataCadastro: new Date('2025-04-15') },
        { nome: "Bruno Carvalho", tipo: "Professor", dataCadastro: new Date('2025-04-14') },
        { nome: "Fernanda Lima", tipo: "Aluno", dataCadastro: new Date('2025-04-13') },
        { nome: "Lucas Gabriel", tipo: "Aluno", dataCadastro: new Date('2025-04-12') },
        { nome: "Beatriz Almeida", tipo: "Professor", dataCadastro: new Date('2025-04-11') }
    ];

    if(!localStorage.getItem("users"))
        UserService.inicializar($scope.usuarios)
    
});

app.controller("AppController", function ($scope, $filter, UserService) {
    $scope.modal = false
    $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";
    $scope.filtroTipoAluno = false
    $scope.filtroTipoProfessor = false
    $scope.filtro = ""
    $scope.users = UserService.listar()
    $scope.userInput = {
        id: 0,
        nome: "",
        tipo: "",
    }
    $scope.select = true

    $scope.toggleModal = () => {
        $scope.modal = !$scope.modal
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

    $scope.adicionarUser = function () {
        $scope.userInput.id = Math.random().toString(36).substring(2, 9)

        UserService.adicionar($scope.userInput)

        $scope.toggleModal()

        $scope.users = UserService.listar()
    }

    $scope.removerUser = function (userId) {
        UserService.remover(userId)


        $scope.users = UserService.listar()
    }
    
    // $scope.usuario = {
    //     nome: "João",
    //     tipo: "Aluno"
    // }
})