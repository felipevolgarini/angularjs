angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatos) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = [];
    
    $scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular", preco: 1},
        {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 2},
        {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
        {nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
        {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2},
    ];    
       
    $scope.apagarContatos = function() {
        $scope.contatos = $scope.contatos.filter(function(contato) {
            if (!contato.selecionado) {
                return contato;
            }
        })
    }
    
    $scope.isContatoSelecionado = function() {                    
        return $scope.contatos.some(function(contato) {
            return contato.selecionado;
        })
    }
    
    $scope.ordenarPor = function(campo) {
        $scope.criterioDeOrdenacao = campo; 
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;                  
    }
    
    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";

    $scope.contatos = contatos.data;    
})