angular.module("listaTelefonica").factory("timestampInterceptor", function() {
    return {
        request: function(config) {
            if (config.url.indexOf("view") > -1) {
                return config;
            }
            config.url += "?timestamp=" + new Date().getTime(); 
            console.log(config.url);
            return config;
        }
    }
})