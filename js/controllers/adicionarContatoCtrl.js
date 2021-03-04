angular.module("listaTelefonica").controller("adicionarContatoCtrl", function($scope, $location, contatosAPI) {
    
    $scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular", preco: 1},
        {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 2},
        {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
        {nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
        {nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2},
    ];
    
    $scope.adicionarContato = function(contato) {
        contatosAPI.saveContato(contato).then(function(data) {
            delete $scope.contato;     
            $scope.contatoForm.$setPristine();  
            $scope.error = false;
            $location.path("/contatos")
        }).catch(function(err) {
            $scope.error = "Não foi possível adicionar o contato";
        })       
    };   
})