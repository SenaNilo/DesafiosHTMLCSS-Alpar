const app = angular.module("managerModule" , [])

app.controller("UsuarioController", function ($scope) {
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
});

app.controller("AppController", function ($scope, $filter) {
    $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";
    $scope.filtroTipoAluno = false
    $scope.filtroTipoProfessor = false
    $scope.filtro = ""

    if($scope.filtroTipoAluno){
        $scope.filtroTipoAluno = true
        $scope.filtroTipoProfessor = false
    }
    if($scope.filtroTipoProfessor){
        $scope.filtroTipoProfessor = true
        $scope.filtroTipoAluno = false
    }

    $scope.filteredUsers = function () {
        let filtered = $filter("filter")(
            $filter("filter")(
                $filter("filter")(
                    $scope.usuarios,
                    $scope.filtroTipoAluno ? { tipo: "Aluno" } : {}
                ),
                $scope.filtroTipoProfessor ? { tipo: "Professor" } : {}
            ),
            $scope.filtro ? { nome:  $scope.filtro } : {}
        )
        
        

        return filtered
    }
    
    // $scope.usuario = {
    //     nome: "João",
    //     tipo: "Aluno"
    // }
})