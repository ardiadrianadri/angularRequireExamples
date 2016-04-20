require.config({
    paths:{
        'angular':'../libs/angular/angular',
        'moduloClientes':'moduloClientes/module',
        'moduloCore':'moduloCore/module'
    },
    shim:{
        'moduloClientes':{
            deps:['angular']
        },
        'moduloCore':{
            deps:['angular','moduloClientes']
        }
    }
});

require(['moduloCore'],function (){
    //Se ha cargado el codigo
});