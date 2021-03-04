angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
    var _getContatos = function() {
        return $http.get(config.baseURL + "/contato");
    }

    var _saveContato = function(contato) {
        return $http.post(config.baseURL + "/contato", contato);
    }

    return {
        getContatos: _getContatos,
        saveContato: _saveContato
    }
});