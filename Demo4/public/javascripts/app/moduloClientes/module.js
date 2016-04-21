define(function (){
    var moduloClientes = angular.module('moduloClientes',[]).config(['$controllerProvider','$provide','$compileProvider',function ($controllerProvider,$provide,$compileProvider){
        moduloClientes.registroController = $controllerProvider.register; //Registro de controladores
        moduloClientes.registrofactory = $provide.factory; //Registro de factory
        moduloClientes.registroService = $provide.service; //Registro de service
        moduloClientes.registroDirectives = $compileProvider.directive; //Resistro de directivas
    }]);

});