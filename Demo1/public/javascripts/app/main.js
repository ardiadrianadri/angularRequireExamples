require.config({
    paths:{
        'angular':'../libs/angular/angular',
        'app':'index',
        'coreModule':'coreModule'   
    },
    
    shim: {
        'app':{
            deps:['angular', 'coreModule']
        },
        
        'coreModule':{
            deps:['angular']
        }
    }
});

require(['app'], function(){
    angular.bootstrap(document,['app']);
});