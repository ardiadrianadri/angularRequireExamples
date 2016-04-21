define(['javascripts/app/moduloCore/loader.js'],function (loader){
    angular.module('moduloCore',['moduloClientes','moduloFacturas']);

    require(loader,function (){
       angular.bootstrap(document,['moduloCore']);
    });
});
