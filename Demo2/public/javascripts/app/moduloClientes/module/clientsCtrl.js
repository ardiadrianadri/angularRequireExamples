define(function (){
    
    angular.module('moduloClientes').controller('clientsCtrl',['clientsSrv','adressSrv',function (clientsSrv, adressSrv) {
        var vm = this;
        var service = new clientsSrv();

        function activate () {
            vm.error = false;
        
            adressSrv.getAddress().then(function (result) {
                vm.addressList = result.data;
            }, function (error) {
                vm.error = true;
                vm.msg = JSON.stringify(error);
            });
            
            service.getListClients().then(function (result){
                vm.clientList = result.data;
            }, function (error){
                vm.error = true;
                vm.msg = JSON.stringify(error);
            });
        }

        activate();
    }]);
});
