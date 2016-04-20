define(function (){
    angular.module('moduloClientes').factory('clientsSrv',['$http','$q', function ($http,$q){

        function ClientServiceClass () {
            this.getListClients = function () {
                var defer = $q.defer();

                $http.get('javascripts/app/moduloClientes/mocks/listClient.json').then(function (data){
                    defer.resolve(data);
                }, function (error){
                    defer.reject(error);
                });

                return defer.promise;
            };
        }

        return ClientServiceClass;
    }]);
});
