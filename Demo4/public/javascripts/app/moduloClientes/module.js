define(function (){
    var moduloClientes = angular.module('moduloClientes',[]).config(['$controllerProvider',function ($controllerProvider){
        moduloClientes.registroController = $controllerProvider.register;
    }]);
    
});