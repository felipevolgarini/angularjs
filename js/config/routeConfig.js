angular.module("listaTelefonica").config(function ($locationProvider) {
        $locationProvider.hashPrefix("");
});



angular.module("listaTelefonica").config(function($routeProvider) {
    $routeProvider.when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaCtrl",
        resolve: {
            contatos: function(contatosAPI) {
                return contatosAPI.getContatos();
            }
        }
    });
    $routeProvider.when("/adicionarContato", {
        templateUrl: "view/adicionarContato.html",
        controller: "adicionarContatoCtrl"
    })
    $routeProvider.otherwise({redirectTo: "/contatos"})
})