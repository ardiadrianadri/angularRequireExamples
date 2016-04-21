define(function(){
    angular.module('moduloFacturas').registrofactory('facturasSrv',['$q','$http',function($q,$http){
        function facturasServiceClass () {
            this.getFalcturas = function(){
                var defer = $q.defer();

                $http.get('javascripts/app/moduloFacturas/mocks/facturas.json').then(function (data){
                    defer.resolve(data);
                }, function (error){
                    defer.reject(error);
                });

                return defer.promise;
            }
        };

        return facturasServiceClass;

    }])
});