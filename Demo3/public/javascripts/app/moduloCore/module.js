define(['javascripts/app/moduloCore/loader.js'], function (loader) {
    angular.module('moduloCore', ['ui.router', 'moduloClientes','moduloFacturas']).config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            
            $stateProvider.state('home',{
                url:'/home',
                templateUrl:'javascripts/app/moduloClientes/views/home.html',
                controllerAs:'ctrl',
                controller:'clientsCtrl'
            }).
            state('datosCliente',{
                url:'/datosCliente',
                templateUrl:'javascripts/app/moduloFacturas/views/facturas.html',
                controllerAs:'vm',
                controller:'facturasCtrl'
            });

        }]);

    require(loader, function () {
        angular.bootstrap(document, ['moduloCore']);
    });
});
