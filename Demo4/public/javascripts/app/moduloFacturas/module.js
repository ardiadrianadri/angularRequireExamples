define(function(){
    var moduloFacturas = angular.module('moduloFacturas',[]).config(['$controllerProvider',function ($controllerProvider){
        moduloFacturas.registroController = $controllerProvider.register;
    }]);
})