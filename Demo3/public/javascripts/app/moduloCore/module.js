define(['javascripts/app/moduloCore/loader.js'], function (loader) {
    angular.module('moduloCore', ['ui.router', 'moduloClientes']).config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            
            $stateProvider.state('home',{
                url:'/home',
                templateUrl:'javascripts/app/moduloClientes/views/home.html',
                controllerAs:'ctrl',
                controller:'clientsCtrl'
            });

        }]);

    require(loader, function () {
        angular.bootstrap(document, ['moduloCore']);
    });
});
