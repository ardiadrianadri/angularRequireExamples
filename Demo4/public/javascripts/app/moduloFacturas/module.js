define(function(){
    var moduloFacturas = angular.module('moduloFacturas',[]).config(['$controllerProvider','$provide','$compileProvider',function ($controllerProvider,$provide,$compileProvider){
        moduloFacturas.registroController = $controllerProvider.register; //Registro de controladores
        moduloFacturas.registrofactory = $provide.factory; //Registro de factory
        moduloFacturas.registroService = $provide.service; //Registro de service
        moduloFacturas.registroDirectives = $compileProvider.directive; //Resistro de directivas
    }]);
})