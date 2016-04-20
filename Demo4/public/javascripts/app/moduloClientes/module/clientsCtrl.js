define(function (){
    
    angular.module('moduloClientes').registroController('clientsCtrl',['clientsSrv',function (clientsSrv) {
        var vm = this;
        var service = new clientsSrv();

        function activate () {
            vm.error = false;

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
