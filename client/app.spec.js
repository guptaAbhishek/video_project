var $rootScope,
    $scope,
    controller;


beforeEach(function(){
    module('VideoApp');

    inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
    });
});

describe('Intialization App.js',function () {
    it('should set the value of ',function(){

    })
})

