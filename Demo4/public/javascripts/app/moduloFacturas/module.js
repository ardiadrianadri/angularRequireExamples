define(function(){
    var moduloFacturas = angular.module('moduloFacturas',[]).config(['$controllerProvider',' $provide','$compileProvider', function ($controllerProvider, $provide,$compileProvider){
        moduloFacturas.registroController = $controllerProvider.register; //Registro de controladores
        moduloFacturas.registrofactory = $provide.factory; //Registro de factorias
        moduloFacturas.registroService = $provide.service; //Registro de servicios
        moduloFacturas.registroDirectivas = $compileProvider.directive; //Registro de directivas
    }]);
})