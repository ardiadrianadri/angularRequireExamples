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
                controller:'clientsCtrl',
                resolve:{
                    loadCtrl:['$q',function($q){
                        var defer = $q.defer();

                        require(['moduloClientes/clientsCtrl'],function (){
                            defer.resolve();
                        });

                        return defer.promise;
                    }]
                }
            }).state('facturas',{
                    url:'/facturas',
                    templateUrl:'javascripts/app/moduloFacturas/views/facturas.html',
                    controllerAs:'vm',
                    controller:'facturasCtrl',
                    resolve:{
                        loadCtrl:['$q',function($q){
                            var defer = $q.defer();

                            require(['moduloFacturas/facturasCtrl'],function (){
                                defer.resolve();
                            });

                            return defer.promise;
                        }]
                    }
                });

        }]);

    require(loader, function () {
        angular.bootstrap(document, ['moduloCore']);
    });
});
