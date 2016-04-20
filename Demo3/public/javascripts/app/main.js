require.config({
    paths:{
        'angular':'../libs/angular/angular',
        'moduloClientes':'moduloClientes/module',
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
        'moduloCore':{
            deps:['ui-router','moduloClientes']
        }
    }
});

require(['moduloCore'],function (){
    //Se ha cargado el codigo
});