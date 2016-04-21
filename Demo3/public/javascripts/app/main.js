require.config({
    paths:{
        'angular':'../libs/angular/angular',
        'moduloClientes':'moduloClientes/module',
        'moduloFacturas':'moduloFacturas/module',
        'moduloCore':'moduloCore/module',
        'ui-router': '../libs/angular-ui-router/release/angular-ui-router'
    },
    shim:{
        'ui-router':{
            deps:['angular']
        },
        'moduloClientes':{
            deps:['ui-router']
        },
        'moduloFacturas':{
            deps:['angular']
        },
        'moduloCore':{
            deps:['ui-router','moduloClientes','moduloFacturas']
        }
    }
});

require(['moduloCore'],function (){
    //Se ha cargado el codigo
});