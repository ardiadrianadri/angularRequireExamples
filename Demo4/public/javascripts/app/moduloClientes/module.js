define(function (){
    var moduloClientes = angular.module('moduloClientes',[]).config(['$controllerProvider',' $provide','$compileProvider', function ($controllerProvider, $provide ,$compileProvider){
        moduloClientes.registroController = $controllerProvider.register; //Registro de controladores
        moduloClientes.registrofactory = $provide.factory; //Registro de factorias
        moduloClientes.registroService = $provide.service; //Registro de servicios
        moduloClientes.registroDirectivas = $compileProvider.directive; //Registro de directivas
    }]);
    
});