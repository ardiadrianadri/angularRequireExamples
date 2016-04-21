define(function () {
    angular.module('moduloFacturas').registroController('facturasCtrl', ['facturasSrv', function (facturasSrv) {
        var vm = this;
        var servicio = new facturasSrv();

        function startApp() {

            servicio.getFalcturas().then(function (data) {
                vm.facturasLst = data.data;
            }, function () {
                console.log("error");
            })

        };

        startApp();


    }])
});