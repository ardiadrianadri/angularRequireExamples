require.config({
    paths:{
        'angular':'../libs/angular/angular',
        'moduloClientes':'moduloClientes/module',
        'moduloCore':'moduloCore/module',
        'moduloFacturas': 'moduloFacturas/module'
    },
    shim:{
        'moduloClientes':{
            deps:['angular']
        },
        'moduloFacturas':{
            deps:['angular']
        },
        'moduloCore':{
            deps:['angular','moduloClientes','moduloFacturas']
        }

    }
});

require(['moduloCore'],function (){
    //Se ha cargado el codigo
});