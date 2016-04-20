define(function () {
    angular.module('coreModule', []).
        controller ('mainController',function (){
        var vm = this;
        vm.msg= "Hello World";
    });
});