define(['javascripts/app/moduloCore/loader.js'],function (loader){
    angular.module('moduloCore',['moduloClientes']);

    require(loader,function (){
       angular.bootstrap(document,['moduloCore']);
    });
});
