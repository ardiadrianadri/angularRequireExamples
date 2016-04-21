define(function () {
    angular.module('moduloClientes').service('adressSrv', ['$http', '$q', function ($http, $q) {

        this.getAddress = function () {
            var defer = $q.defer();

            $http.get('javascripts/app/moduloClientes/mocks/listAddress.json').then(function (data) {
                defer.resolve(data);
            }, function (error) {
                defer.reject(error);
            });

            return defer.promise;
        }
    }]);
});
